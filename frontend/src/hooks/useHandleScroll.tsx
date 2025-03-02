import  { RefObject, useCallback, useEffect, useRef, useState} from "react";
import {useScroll, useTransform} from "framer-motion";

const useHandleScroll = (stickyRef: RefObject<HTMLDivElement>) => {
    const stickyBlock = stickyRef.current
    // const isStickyRef = useRef(na)
    const [isStickyScroll, setIsStickyScroll] = useState<boolean>(false)

    //расстояние до прилипающего блока
    const topSpaceRef = useRef<number>(0)
    //координата Y на начало перетаскивания
    const startTouchYRef = useRef<number>(0);

    //плавные значения
    const {scrollY} = useScroll()
    const opacity = useTransform(scrollY, [0, 150], [1, 0])
    const translateY = useTransform(scrollY, [0, 200], [0, 60])

    //подсчет расстояния от верха экрана до элемента
    const calculationTop = useCallback((el: HTMLDivElement | null) => {
        if (el === null) return
        return el.getBoundingClientRect().top;
    }, [stickyBlock])

    //отчлеживаем скрол колесиком
    const handleScroll = useCallback(() => {
        const stickyTopSpacing = calculationTop(stickyBlock) || 0
        console.log(stickyTopSpacing);

        // состояние прилипания = предыдущему?
        setIsStickyScroll(prevState =>
            prevState === (stickyTopSpacing <= 0) ? prevState : (stickyTopSpacing <= 0));
    }, [isStickyScroll])

    //обработка докрута
    const handleTouchEnd = useCallback((event) => {
        let deltaY = event.changedTouches[0].clientY - startTouchYRef.current
        console.log('topSpaceRef.current', topSpaceRef.current);

        //дельта перемещения >= чуть меньше расстояния до стики блока
        if (Math.abs(deltaY) >= (topSpaceRef.current / 2)) {
            console.log('дельта в хорошем условии', deltaY);
            console.log(topSpaceRef.current / 2);

            if (deltaY < 0) { //вниз
                window.scrollTo({top: topSpaceRef.current + 1, behavior: 'smooth'})
                setIsStickyScroll(true)
            } else { //вверх
                window.scrollTo({top: 0, behavior: 'smooth'})
                setIsStickyScroll(false)
            }
        }
        //плавно скролим обратно
        else {
            console.log('дельта в плохом условии', deltaY);
            console.log(isStickyScroll);

            if (isStickyScroll) {
                window.scrollTo({top: topSpaceRef.current + 1, behavior: 'smooth'})
            } else {
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
        }
    }, [stickyBlock, isStickyScroll])

    const handleTouchStart = useCallback((event) => {
        startTouchYRef.current = event.changedTouches[0].clientY
    }, [])


    useEffect(() => {
        console.log(isStickyScroll, 'изменился');
    }, [isStickyScroll]);

    return {isStickyScroll, opacity, translateY, handleTouchEnd, handleTouchStart, calculationTop, handleScroll ,topSpaceRef}
}

export default useHandleScroll
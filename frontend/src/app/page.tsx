'use client'
import styles from './page.module.css'
import RecommendedCarousel from "@/src/widgets/RecommendedCarousel/RecommendedCarousel";
import CategorySelection from "@/src/widgets/CategorySelection/CategorySelection";
import {ICategory} from "@/src/types/category";
import RecipeList from "@/src/widgets/RecipeList/RecipeList";
import {motion} from "framer-motion";
import useHandleScroll from "@/src/hooks/useHandleScroll";
import {useEffect, useRef} from "react";

export default function Home() {
    const categories: ICategory[] = [
        {
            id: '1',
            color: 'rgba(255,137,0,0.47)',
            image: '/icons/test-fish.svg',
            title: 'Первое'
        },
        {
            id: '2',
            color: 'rgba(255,38,0,0.49)',
            image: '/icons/test-fish.svg',
            title: 'Второе'
        },
        {
            id: '3',
            color: 'rgba(0,119,255,0.49)',
            image: '/icons/test-fish.svg',
            title: 'Десерты очень вкусные'
        },
    ]

    const stickyRef = useRef<HTMLDivElement | null>(null)
    const listRef = useRef<HTMLDivElement | null>(null)

    const {
        handleTouchEnd,
        handleTouchStart,
        calculationTop,
        handleScroll,
        topSpaceRef,

        isStickyScroll,

        translateY,
        opacity
    } = useHandleScroll(stickyRef)

    useEffect(() => {
        const top = calculationTop(stickyRef.current);
        console.log(top, 'top в эффекте');
        topSpaceRef.current = top || 0;
    }, [stickyRef]);

    return (
        <div className={styles.homeScreen}
             onTouchStart={handleTouchStart}
             onWheel={handleScroll}
             onTouchEnd={handleTouchEnd}
        >
            <motion.div style={{opacity, translateY}}>
                <RecommendedCarousel/>
            </motion.div>

            <div
                className={styles.stickyContainer}

                //отключить докрут при активном блоке
                onTouchMove={e => isStickyScroll && listRef.current?.scrollTop > 0 && e.stopPropagation()}
                onTouchEnd={e => isStickyScroll && listRef.current?.scrollTop > 0 && e.stopPropagation()}
                ref={stickyRef}
            >
                <CategorySelection categories={categories}/>
                <RecipeList isScroll={isStickyScroll} ref={listRef}/>
            </div>
        </div>
    );
}

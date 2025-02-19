'use client'
import styles from './layout.module.css'
import React, {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";
const layout = ({children}) => {
    const pathname = usePathname()
    const circleBlock = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        console.log('изменился');
        if ("style" in circleBlock.current) {
            if (pathname === '/auth/otp') {
                circleBlock.current.style.transform = 'rotate(180deg)';
            }else {
                circleBlock.current.style.transform = 'rotate(0deg)';
            }
        }
    }, [pathname])

    return (
        <div className={styles.wrapper}>
            {children}
            <div className={styles.decorateBlock} ref={circleBlock}>
                <div className={styles.decorateCircle1}/>
                <div className={styles.decorateCircle2}/>
            </div>
        </div>
    )
};

export default layout;
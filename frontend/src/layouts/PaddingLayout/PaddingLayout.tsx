import styles from './PaddingLayout.module.css'
import React, {ReactNode} from 'react';
import {cn} from "@/src/lib/utils";

interface IPaddingLayoutProps{
    className?: string,
    children: ReactNode
}
const PaddingLayout = ({className, children}: IPaddingLayoutProps) => {
    return (
        <div className={cn(styles.paddingWrapper ,className)}>
            {children}
        </div>
    )
};

export default PaddingLayout;
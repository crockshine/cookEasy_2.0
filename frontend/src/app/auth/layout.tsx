import styles from './layout.module.css'
import React from "react";
const layout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
            <div className={styles.decorateCircle1}/>
            <div className={styles.decorateCircle2}/>
        </div>
    )
};

export default layout;
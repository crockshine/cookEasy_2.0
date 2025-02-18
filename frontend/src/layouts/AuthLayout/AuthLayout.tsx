import styles from './AuthLayout.module.css'
import React, {PropsWithChildren} from 'react';

interface IAuthLayoutProps extends PropsWithChildren {
    title: string,
    subtitle?: string
}

const AuthLayout = ({children, title, subtitle}: IAuthLayoutProps) => {
    return (
        <div className={styles.authLayout}>
            <div className={styles.infoBlock}>
                <h1><b>{title}</b></h1>
                {
                    subtitle && <p>{subtitle}</p>
                }
            </div>
            {children}
        </div>
    )
}

export default AuthLayout;
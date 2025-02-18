import styles from './layout.module.css'
const layout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
};

export default layout;
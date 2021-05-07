import styles from '../styles/container.module.css'

const Container = ({ children }) => 
    <div className={styles.container}>
        {children}
    </div>

export default Container




import styles from '../styles/header.module.css'

const Header = ({ children }) =>
    <div className={styles.header}>
        {children}
    </div>

export default Header

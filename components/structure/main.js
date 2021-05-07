//components/structure/main.js

import styles from '../styles/main.module.css'

const Main = ({children}) =>
    <div className={styles.main}>
        {children}
    </div>

export default Main

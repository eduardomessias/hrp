// ux/components/landing/cover.js

import styles from '../../../styles/cover.module.css'

const Cover = ({children}) =>
    <div className={"absolute top-0 w-full h-full bg-center bg-cover " + styles.landingCover}>
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>

export default Cover


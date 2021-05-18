// ux/components/layout/hero.js

import Cover from '../components/landing/cover.js'
import BackgroundOverlay from '../components/landing/backgroundoverlay.js'

import styles from '../../styles/hero.module.css'

const Hero = ({children}) =>
    <div className={"relative pt-16 pb-32 flex content-center items-center justify-center " + styles.landingHero}>
        <Cover>
            <BackgroundOverlay />
        </Cover>
    </div>

export default Hero


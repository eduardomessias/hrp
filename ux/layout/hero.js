// ux/components/layout/hero.js

import Cover from '../components/landing/cover.js'
import BackgroundOverlay from '../components/landing/backgroundoverlay.js'

import styles from '../../styles/hero.module.css'

const Hero = ({children}) =>
    <div className={"relative pt-16 pb-32 flex content-center items-center justify-center " + styles.landingHero}>
        <Cover>
            <BackgroundOverlay />
        </Cover>
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto text-center">
                    <div className="pr-12">
                        <h1 className="text-white font-semibold text-5xl">
                            Enjoy your life.
                        </h1>
                        <p className="mt-4 text-lg text-gray-300">
                            HRP helps you take care of your resources
                            in an easy, intelligent way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Hero


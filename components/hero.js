// components/hero.js

import Cover from './cover.js'
import BackgroundOverlay from './backgroundoverlay.js'

import styles from '../styles/hero.module.css'

const Hero = ({children}) =>
    <>
    <style jsx>{`
        .h-70px {
            height: 70px;
        }
    `}</style>
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
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden">
        <svg 
            className="absolute bottom-0 overflow-hidden h-70px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 255 100"
            x="0"
            y="0">
            <polygon 
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100">
            </polygon>
        </svg>
    </div>
    </>

export default Hero


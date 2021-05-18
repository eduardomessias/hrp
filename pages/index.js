import Image from 'next/image'

import Base from '../ux/layout/base.js'
import TopMenu from '../ux/layout/topmenu.js'
import Hero from '../ux/layout/hero.js'

const transparent = true
const Home = () =>
    <Base title="Home resources planning">
        <TopMenu transparent={transparent}  />
        <main>
            <Hero />
        </main>

    </Base>

export default Home

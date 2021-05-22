import Image from 'next/image'

import Layout from '../components/layout.js'
import NavBar from '../components/navbar.js'
import Hero from '../components/hero.js'

const transparent = true
const Home = () =>
    <Layout title="Home resources planning">
        <NavBar transparent={transparent}  />
        <main>
            <Hero />
        </main>

    </Layout>

export default Home

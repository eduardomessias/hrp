import Head from 'next/head'

const Layout = ({ children }) =>
    <>
        <Head>
            <title>Home Resources Planning</title>
            <link rel='icon' href='/favicon' />
        </Head>
        <main>{children}</main>
    </>

export default Layout

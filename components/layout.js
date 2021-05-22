// components/layout.js

import Head from 'next/head'

const Layout = ({ title, children }) =>
    <>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon' />
        </Head>
        <main>{children}</main>
    </>

export default Layout

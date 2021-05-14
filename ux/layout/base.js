// ux/layout/base.js

import Head from 'next/head'

const Base = ({ title, children }) =>
    <>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon' />
        </Head>
        <main>{children}</main>
    </>

export default Base

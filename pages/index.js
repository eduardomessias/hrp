import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Action from '../components/action'
import Timeline from '../components/timeline'

export default function Home() {
    return <>
            <Head>
                <title>Home resources planning</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.header}>
                    Header
                </div>
                <div className={styles.left}>
                    Left
                </div>
                <div className={styles.main}>
                    <Action component="person" route="people" type="create" />
                </div>
                <div className={styles.right}>
                    <Timeline></Timeline>
                </div>
                <div className={styles.footer}>
                    Footer
                </div>
            </div>
        </>
}

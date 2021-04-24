import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Action from '../components/action'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home resources planning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Action component="person" route="people" type="create" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

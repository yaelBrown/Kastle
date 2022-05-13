import Link from 'next/link'

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>Home Page</h1>
        <br/>
        <ul>
          <Link href={'/login'}><li>Login</li></Link>
          <Link href={'/register'}><li>Register</li></Link>
          <Link href={'/dashboard'}><li>Dashboard</li></Link>
          <Link href={'/adfgdfev'}><li>Error</li></Link>
        </ul>
      </main>

      <Footer/>
    </div>
  )
}

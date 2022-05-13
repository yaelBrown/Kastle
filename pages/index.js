import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>Home Page</h1>
      </main>

      <Footer/>
    </div>
  )
}

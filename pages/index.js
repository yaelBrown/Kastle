import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import styles from "../assets/styles/Home.module.css";

import LandingOne from "../components/home/landingOne";

// import BgVideo1 from "../assets/mp4/bg-video-1.mp4"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      {/* <video autoPlay muted loop className={styles.video}>
        <source src="/mp4/bg-video-1.mp4" type="video/mp4"/>
      </video> */}

      <main className={styles.main}>
        <LandingOne />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

import Link from "next/link";

import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Navbar from "../components/home/Navbar";
import styles from "../assets/styles/Home.module.css";
import Jumbotron from "../components/home/jumbotron";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Jumbotron />
      <h1>Home Page</h1>
      <Footer />
    </div>
  );
};

Home.Layout = "L1";

export default Home;

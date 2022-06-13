import Link from "next/link";

import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Navbar from "../components/home/Navbar";
import Jumbotron from "../components/home/sections/jumbotron";
import Whatis from "../components/home/sections/whatis";
import Kastrate from "../components/home/sections/kastrate";
import Platforms from "../components/home/sections/platforms";
import Pay from "../components/home/sections/pay";

import styles from "../assets/styles/Landing.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Jumbotron />
      <Whatis />
      <Kastrate />
      <Platforms />
      <Pay />
      <p>Join Today</p>
      <Footer />
    </div>
  );
};

Home.Layout = "L1";

export default Home;

import Header from "../layout/header";
import Footer from "../layout/footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "../../assets/styles/components/dashboard/DashboardLayout.module.css";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar className={styles.dlSidebar}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;

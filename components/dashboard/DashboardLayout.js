import Header from "../layout/header";
import Footer from "../layout/footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;

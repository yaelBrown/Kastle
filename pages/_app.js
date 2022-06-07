import "../assets/styles/globals.css";
import Layout from '../components/layout/Layout';
import DashboardLayout from "../components/dashboard/DashboardLayout";

const Layouts = {
  L1: Layout,
  DL: DashboardLayout
}

const MyApp = ({ Component, pageProps }) => {
  const PageLayout = Layouts[Component.Layout] || Layouts[DL];S
  return (
    <PageLayout>
      <Component {...pageProps} />);
    </PageLayout>
  )
}

export default MyApp;

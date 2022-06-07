import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Authentication from "../../util/authentication/Authentication";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../../util/constants";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

const auth = new Authentication();

const Dashboard = () => {
  const initialState = {
    user: {},
    app: {
      loading: true,
    },
  };

  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("tkn");
  //   if (token === null) router.push("/login");

  //   try {
  //     token = jwt.verify(token, JWT_TOKEN);
  //     if (!auth.isValid(token)) {
  //       router.push("/login");
  //       localStorage.removeItem("tkn");
  //     } else {
  //       setState({ ...state, user: token.data });
  //     }
  //   } catch (error) {
  //     router.push("/login");
  //   }
  // }, []);

  const [state, setState] = useState(initialState);

  const greeting = () => {
    if (state.user.alias === undefined || state.user.alias === null) return;
    if (state.user.alias) return <h1>Hello {state.user.alias}</h1>;
    if (state.user.fname) return <h1>Hello {state.user.fname}</h1>;
  };

  return (
    <section>
      <Navbar />
      <Sidebar />
    </section>
  );
};

export default Dashboard;

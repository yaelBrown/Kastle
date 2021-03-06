import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Authentication from "../../util/authentication/Authentication";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../../util/constants";

const auth = new Authentication();

const Dashboard = () => {
  const initialState = {
    user: {},
  };

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("tkn");
    if (token === null) router.push("/login");

    try {
      token = jwt.verify(token, JWT_TOKEN);
      if (!auth.isValid(token)) {
        router.push("/login");
        localStorage.removeItem("tkn");
      } else {
        setState({ ...state, user: token.data });
      }
    } catch (error) {
      router.push("/login");
    }
  }, []);

  const [state, setState] = useState(initialState);

  const greeting = () => {
    if (state.user.alias === undefined || state.user.alias === null) return;
    if (state.user.alias) return <h1>Hello {state.user.alias}</h1>;
    if (state.user.fname) return <h1>Hello {state.user.fname}</h1>;
  };

  return (
    <section>
      {greeting()}
      <h2>Dashboard Page</h2>
      <ul>
        <Link href="/logout">
          <li>Logout</li>
        </Link>
        <Link href="/">
          <li>Home</li>
        </Link>
      </ul>
    </section>
  );
};

export default Dashboard;

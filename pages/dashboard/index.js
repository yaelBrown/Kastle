import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Authentication from "../../util/authentication/Authentication";

const auth = new Authentication()

const Dashboard = () => {
  const router = useRouter()

  useEffect(() => {
    const isToken = localStorage.getItem('tkn')
    const isValidToken = auth.verifyFromLocalStorage()
    if (isToken === null) router.push("/login")

    if (!isValidToken) {
      router.push("/login")
    }
    console.log({isValidToken})
  }, [1])
  
  return <div>Dashboard Page</div>;
};

export default Dashboard;

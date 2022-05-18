import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("tkn");
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <h2>Goodbye...</h2>
      <p>
        Redirecting you to the home page... or <Link href="/">click here</Link>
      </p>
    </section>
  );
};

export default Logout;

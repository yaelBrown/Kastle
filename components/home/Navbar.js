import Image from "next/image";
import Link from "next/link";
import styles from "../../assets/styles/components/home/Navbar.module.css";

const Navbar = () => {
  // TODO: Create auth method to check if user is logged in or not
  const isLoggedIn = false;

  const renderNavAction = () => {
    return isLoggedIn ? (
      <Link href="/logout">
        <a className={styles.navLink}>Logout</a>
      </Link>
    ) : (
      <>
        <Link href="/login">
          <a className={styles.navLink}>Login </a>
        </Link>
        /
        <Link href="/register">
          <a className={styles.navLink}> Register</a>
        </Link>
      </>
    );
  };

  return (
    <navbar className={styles.nav}>
      <div>
        <Image
          src="/images/Kastle-Logo.jpg"
          width={30}
          height={30}
          alt="kastleLogo"
        />
      </div>
      <div>
        <h3>Kastle</h3>
      </div>
      <div>
        <h4>{renderNavAction()}</h4>
      </div>
    </navbar>
  );
};

export default Navbar;

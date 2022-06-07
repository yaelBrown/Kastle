import Image from "next/image";
import Link from "next/link";
import styles from "../../assets/styles/components/dashboard/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <Image
          src="/images/Kastle-Logo.jpg"
          width={30}
          height={30}
          alt="kastleLogo"
        />
      </div>
      <div>
        <Link href="/notifications">
          <a className={styles.navLink}>n</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

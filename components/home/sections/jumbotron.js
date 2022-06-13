import { Container, Button } from '@nextui-org/react';
import Image from "next/image";
import Link from "next/link";

import styles from "../../../assets/styles/components/home/Jumbotron.module.css"

function Jumbotron() {

  return (
    <Container>
      <section className={styles.jumbotron}>
        <div className={styles.jumboLeft}>
          <h1>Kastle</h1>
          <h3>Cyber Training Platform</h3>
          <br />
          <Link
            href="/register"
          >
            <Button
              color='success'
              ghost
              size='xl'
            >
              Join Today
            </Button>
          </Link>
        </div>
        <div className={styles.jumboRight}>
          <Image
            src="/images/Kastle-Logo.jpg"
            alt="Kastle Logo"
            layout='fixed'
            width={300}
            height={300}
          />
        </div>
      </section>
    </Container>
  );
}

export default Jumbotron;

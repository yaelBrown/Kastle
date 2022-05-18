import KastleLogo from '../../assets/images/Kastle-Logo.jpg'
import Image from 'next/image'

import styles from '../../assets/styles/components/home/LandingOne.module.css'

const LandingOne = () => {
  return (
    <section className={styles.wrapper}>
      <Image 
        src={KastleLogo} 
        className={styles.kastleLogo} 
        alt="kastleLogo"
        width={300}
        height={300}
      />
      <h1>Kastle.one</h1>
      <p>Cyber training platform</p>
      <p>Coming soon...</p>
    </section>
  );
}

export default LandingOne;
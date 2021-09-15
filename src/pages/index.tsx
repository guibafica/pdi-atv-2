import { useState } from 'react';
import Head from 'next/head';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  // const [hamburgerIcon, setHamburgerIcon] = useState(true);

  // function handleMenuBarClick() {
  //   setHamburgerIcon(!hamburgerIcon);
  // }

  return (
    <div className={styles.homepage}>
      <Head>
        <title>OpenCV</title>
      </Head>

      {/* Começo home section */}
      <section className={styles.home} id="home">

      </section>
      {/* Fim home section */}

      {/* Começo footer section */}
      <div className={styles.footer}>
        <h1 className={styles.credit}>
          Feito por <a href="https://guilherme-bafica.vercel.app/">Guilherme Bafica</a>.
          todos os direitos reservados.
        </h1>
      </div>
      {/* Fim footer section */}
    </div>
  )
}

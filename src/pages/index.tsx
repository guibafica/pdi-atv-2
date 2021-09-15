import { useCallback } from 'react';
import cv from "opencv-ts";
import Head from 'next/head';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  const selectImage = useCallback(() => {
    const img_input = document.getElementById("input_image");
    const file_input = document.getElementById("file_input");

    file_input.addEventListener("change", (img) => {
      img_input.src = URL.createObjectURL(img.target.files[0]);
    }, false);

    img_input.onload = function () {
      const mat = cv.imread(img_input);

      cv.cvtColor(mat, mat, cv.COLOR_RGB2GRAY);

      cv.imshow("output", mat);

      mat.delete();
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <Head>
        <title>OpenCV</title>
      </Head>

      {/* Começo home section */}
      <section className={styles.home} id="home">
        <img id="input_image" />

        <input type="file" id="file_input" onClick={selectImage} />

        <canvas id="output" />
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

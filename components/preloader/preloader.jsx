import React from "react";
import styles from './preloader.module.css'
import Image from 'next/image'
import { useEffect} from "react";
import Spinner_2 from  '../common/spinner_2/spinner'

export default function Preloader() {

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    window.onload ?
      preloader.classList.remove(styles.preloaderHide) :
        preloader.classList.add(styles.preloaderHide);

    setTimeout(() => {
      preloader.style.display = "none";
    }, 3000);


  }, []);
    return (
      <>
        <section id="preloader" className={styles.preloaderContainer}>
          <div  className={styles.logoContainer}>
            <Image priority src="/Logo.png" alt="logo" width={100} height={100} />
          </div>
          <Spinner_2/>
        </section>
      </>
    );

  }

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/layout/FooterContainer/footerContainer";
import Preloader from "@/components/preloader/preloader";
import styles from "@/styles/Home.module.css";

export default function Detectalo() {
  return (
    <>
      <Preloader />
      <Navbar />
      <section className={styles['ripple-background']}>
      <div className={`${styles.circle} ${styles.xxlarge} ${styles.shade1}`}></div>
      <div className={`${styles.circle} ${styles.xlarge} ${styles.shade2}`}></div>
      <div className={`${styles.circle} ${styles.large} ${styles.shade3}`}></div>
      <div className={`${styles.circle} ${styles.medium} ${styles.shade4}`}></div>
      <div className={`${styles.circle} ${styles.small} ${styles.shade5}`}></div>
      </section>      <Footer />
    </>
  );
}

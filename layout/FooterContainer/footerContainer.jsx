import styles from "./footerContainer.module.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";



export default function FooterContainer() {
  return (
    <footer className={styles.footerContainer}>
      <picture className={styles.logoFooterContainer}>
        <Image src="/Logo.png" alt="Fistor Sport" width={120} height={120} />
      </picture>
      <article className={styles.infoFooterContainer}>
        <div className={styles.footerColumn}>
          <div className={styles.textInfoFooter}>
            <AiOutlineMail
              style={{ margin: "0.2em" }}
              fontSize={"2em"}
              color="white"
            />
            <a style={{color:"white",textDecoration:"none"}} href="mailto:fistor.sport08@gmail.com">fistor.sport08@gmail.com</a>
          </div>
          <div className={styles.textInfoFooter}>
            <AiOutlinePhone
              style={{ margin: "0.2em" }}
              fontSize={"2em"}
              color="white"
            />
            <a style={{color:"white",textDecoration:"none"}} href="tel:+526644649847">6644649847</a>
          </div>
          <div className={styles.textInfoFooter}>
            <AiOutlineHome
              style={{ margin: "0.2em" }}
              fontSize={"2.8em"}
              color="white"
            />
            <p>Aeropuerto 1900, C.Comercial Otay, 22425 Tijuana, B.C.</p>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerRow}>
            <div className={styles.textInfoFooter}>
              <p>Fistor Sport - Vistiendo las mejores ligas.</p>
            </div>
          </div>
          <div className={styles.footerRow}>
            <div
              style={{ gap: "2em", marginLeft: "0.3em" }}
              className={styles.textInfoFooter}
            >
              <FaFacebookF fontSize={"1.5em"} color="white" />
              <FaWhatsapp fontSize={"1.5em"} color="white" />
              <FaInstagram fontSize={"1.5em"} color="white" />
            </div>
          </div>
          <div className={styles.footerRow}>
            <div className={styles.textInfoFooter}>
              <p>By brychxpin </p>
              <AiFillLinkedin fontSize={"1.5em"} color="white" />
            </div>
          </div>
        </div>
      </article>
    </footer>
  );
}

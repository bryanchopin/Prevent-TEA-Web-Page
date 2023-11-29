import Styles from "./workingOn.module.css";
import Image from "next/image";

export default function WorkingOn() {
  return (
    <>
      <div className={Styles.workingOnContainer}>
          {/* <div className="logo"></div> */}
          <Image src="/Logo.png" alt="Logo" width={100} height={60} />
          <div className={Styles.workingOnText}>Working on</div>
          <div className={Styles.workingOnText}>this page</div>
      </div>
    </>
  );
}
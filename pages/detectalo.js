import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/layout/FooterContainer/footerContainer";
import Preloader from "@/components/preloader/preloader";

export default function Detectalo() {
  return (
    <>
      <Preloader />
      <Navbar />
      <h1>DETECTALO</h1>
      <Footer />
    </>
  );
}

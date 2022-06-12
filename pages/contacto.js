import { useEffect, useState } from "react";
import Head from "next/head";
import RadiosPageNavbar from "../components/RadiosPageNavbar";

function Contacto() {
  return (
    <>
      <Head>
        <title>EPA - FM | Contacto</title>
      </Head>
      <div className="Contacto">
        <RadiosPageNavbar />
      </div>
      <style jsx>
        {`
          .Contacto {
            width: 100%;
            height: 100vh;
            background-color: black;
          }
        `}
      </style>
    </>
  );
}

export default Contacto;

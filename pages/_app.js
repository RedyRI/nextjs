import { useRouter } from "next/router";
import "../styles/globals.css";
import { useState } from "react";
import Playbar from "../components/Playbar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.route);

  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <div className="App_playbar">
        <Playbar />
      </div>
      <style jsx>{`
        h1 {
          margin-top: 100px;
        }
        .App_playbar {
          visibility: ${router.route != "/" ? "visible" : "hidden"};
        }
      `}</style>
    </>
  );
}

export default MyApp;

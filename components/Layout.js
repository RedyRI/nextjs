import { useEffect } from "react";
import Head from "next/head";

function Layout(props) {
  useEffect(() => {}, []);

  const play = (e) => {
    let audio = document.querySelector("audio");
    audio.play();
    console.log("component loaded");
  };

  return (
    <div onLoad={play}>
      <Head>
        <title>eppa nextjs version</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
      <main>{props.children}</main>
      <div>
        <audio src="https://streaming.gometri.com/stream/8011/stream"></audio>
      </div>
    </div>
  );
}

export default Layout;

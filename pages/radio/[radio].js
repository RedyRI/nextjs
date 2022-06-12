import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Slider from "../../components/Slider";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Playbar from "../../components/Playbar";
import Head from "next/head";

function Radio() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const radio =
    data != undefined && data.length > 0
      ? data.filter((r) => r.name == router.query.radio)[0]
      : {};
  const background =
    radio.backgroundImage != ""
      ? `url('${radio.backgroundImage}')`
      : radio.backgroundColor != ""
      ? radio.backgroundColor
      : "linear-gradient(to left, #000 0%, #000 100%)";
  useEffect(() => {
    fetch(`https://epabackend.azurewebsites.net/radios`)
      .then((response) => response.json())
      .then((radios) => {
        setData(radios);
      })
      .catch((e) => console.error("el error es -------" + e));
  }, []);

  // `https://epabackend.azurewebsites.net/radios?page=${router.query.radio}`;
  // console.log(router.query.radio);
  // console.log(radio);
  return (
    <>
      <Head>
        <title>EPA - FM | Radio | {radio.page}</title>
      </Head>
      <main className="Radio">
        <Header />
        <div className="Radio_slider">
          <Slider shadow={radio.shadow} data={data} />
        </div>
        {/* <Navbar /> */}
        <div
          className={`Radio_logo ${
            radio.name == "oncesesenta" ||
            radio.name == "ondavip" ||
            radio.name == "ondaleyendas" ||
            radio.name == "ondafeeling"
              ? "artistas"
              : ""
          }`}
        >
          <img
            className="Radio_logo-img"
            src={
              radio.name == "oncesesenta" ||
              radio.name == "ondavip" ||
              radio.name == "ondaleyendas" ||
              radio.name == "ondafeeling"
                ? radio.artistas
                : radio.logo
            }
            alt={radio.name}
          />
        </div>
        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            .Radio {
              width: 100%;
              height: 100vh;
              background-color: black;
              background-image: ${background};
              background-size: cover;
              margin: 0;
              padding: 0;
              padding-top: 80px;
              overflow: hidden;
            }
            .Radio_logo {
              width: 400px;
              height: 400px;
              margin: 20px auto 0 auto;
            }
            .Radio_logo.artistas {
            }

            .Radio_logo.artistas > img {
            }
            .Radio_logo-img {
              width: 100%;
              height: auto;
            }
          `}
        </style>
      </main>
    </>
  );
}


export default Radio;

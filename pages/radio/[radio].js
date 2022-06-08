import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../../components/Slider";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

function Radio(radio) {
  const [data, setData] = useState();
  const background =
    radio.backgroundImage != ""
      ? `url('${radio.backgroundImage}')`
      : radio.backgroundColor != ""
      ? radio.backgroundColor
      : "linear-gradient(to left, #000 0%, #000 100%)";
  useEffect(() => {
    fetch("http://localhost:3000/api/radios")
      .then((response) => response.json())
      .then((r) => {
        setData(r["radios"]);
      })
      .catch((e) => console.error("el error es -------" + e));
  }, []);
  console.log(radio.backgroundImage);
  return (
    <Layout>
      <style jsx>
        {`
          .Radio {
            width: 100vw;
            min-height: 100vh;
            background-image: ${background};
            background-size: cover;
          }
          .Radio_logo {
            width: 400px;
            height: 400px;
            margin: 20px auto;
          }
          .Radio_logo.artistas {
            border: solid red 1px;
          }

          .Radio_logo.artistas > img {
          }
          .Radio_logo-img {
            width: 100%;
            height: auto;
            border: solid green 1px;
          }
        `}
      </style>
      <main className="Radio">
        <div className="radio_slider">
          <Header />
        </div>
        <div className="Radio_slider">
          <Slider shadow={radio.shadow} data={data} />
        </div>
        <Navbar />
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
            alt=""
          />
        </div>
      </main>
    </Layout>
  );
}

Radio.getInitialProps = async (ctx) => {
  let q = ctx.query;
  let radio;
  await axios.get(`http://localhost:3000/api/${q.radio}`).then((response) => {
    radio = response.data;
  });
  return radio ? radio : { radio: "nodata" };
};

export default Radio;

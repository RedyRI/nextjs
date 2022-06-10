import axios from "axios";
import Slider from "../components/Slider";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const dataHome = data[0] || {};
  const shadowHome = dataHome.shadow;

  useEffect(() => {
    fetch("https://epabackend.azurewebsites.net/radios")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <Layout showSlider={true} showPlaybar={false}>
      <main className="Home">
        <Header />
        <div className="Home_slider">
          <Slider shadow={shadowHome} data={data} />
        </div>
        <div className="Home_logo">
          <img className="Home_logo-img" src={dataHome.logo} alt="" />
        </div>
        <style jsx>
          {`
            .Home {
              position: relative;
              width: 100vw;
              min-height: 100vh;
              background: black;
              overflow: hidden;
              background-image: ${dataHome.backgroundColor};
              padding-top: 70px;
            }
            .Home_logo {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -40%);
              margin: 0 auto;
              width: 500px;
              height: 500px;
            }
            .Home_logo > img {
              width: 450px;
            }
          `}
        </style>
      </main>
    </Layout>
  );
}

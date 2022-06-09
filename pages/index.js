import axios from "axios";
import Slider from "../components/Slider";
import Layout from "../components/Layout";
import Header from "../components/Header";
export default function Home(data) {
  const dataHome = data.radios[0];
  const shadowHome = dataHome.shadow;

  console.log(shadowHome);
  return (
    <Layout>
      <main className="Home">
        <Header />
        <div className="Home_slider">
          <Slider shadow={shadowHome} data={data.radios} />
        </div>
        <div className="Home_logo">
          <img
            className="Home_logo-img"
            src={dataHome.logo}
            alt="logo inicio"
          />
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
              width: 450px;
              height: 450px;
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

Home.getInitialProps = async (ctx) => {
  let data;
  await axios.get("http://localhost:3000/api/radios").then((response) => {
    data = response.data;
  });
  return data;
};

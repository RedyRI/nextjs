import axios from "axios";
import Slider from "../components/Slider";
import Layout from "../components/Layout";

export default function Home(data) {
  const dataHome = data.radios[0];
  const shadowHome = dataHome.shadow;
  console.log(shadowHome);
  return (
    <Layout data={data.radios}>
      <main className="Home">
        <div className="Home_slider">
          <Slider shadow={shadowHome} data={data.radios} />
        </div>
        <div className="Home_logo">
          <img className="Home_logo-img" src={dataHome.logo} alt="" />
        </div>
        <style jsx>
          {`
            .Home {
              width: 100vw;
              height: 100vh;
              background: black;
              background-image: ${dataHome.backgroundColor};
            }
            .Home_logo {
              margin: 0 auto;
              width: 500px;
              height: 500px;
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

import axios from "axios";
import Slider from "../components/Slider";
import Layout from "../components/Layout";
export default function Home(data) {
  console.log(data.radios);
  return (
    <Layout data={data.radios}>
      <div>
        <h1>Next test app</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et impedit
          voluptates quibusdam blanditiis inventore perferendis maiores! Saepe
          consequuntur eos veritatis, sed quae quia nam deserunt dolore, non
          dignissimos, ipsam error!
        </p>
      </div>
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

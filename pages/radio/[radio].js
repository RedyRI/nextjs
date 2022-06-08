import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import PageCard from "../../components/PageCard";

function Radio(radio) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/radios")
      .then((response) => response.json())
      .then((r) => {
        setData(r["radios"]);
      })
      .catch((e) => console.error("el error es -------" + e));
  }, []);

  return (
    <Layout data={data}>
      <PageCard info={radio} />
      <div>Radio</div>
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

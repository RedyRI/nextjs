import { useState, useEffect } from "react";
import Head from "next/head";
import Playbar from "./Playbar";
import Slider from "./Slider";
import RadiosPageNavbar from "./RadiosPageNavbar";

function Layout(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://epabackend.azurewebsites.net/radios")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  const play = (e) => {
    let audio = document.querySelector("audio");
    console.log("component loaded");
  };

  return (
    <div onLoad={play}>
      {/* <RadiosPageNavbar /> */}
      {/* {props.showSlider == true ? <Slider /> : ""} */}
      <main>{props.children}</main>
      {/* <Playbar /> */}
      {/* <div>
        <audio src="https://streaming.gometri.com/stream/8011/stream"></audio>
      </div> */}
    </div>
  );
}

export default Layout;

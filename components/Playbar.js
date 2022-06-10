import { useState, useEffect } from "react";

function Playbar() {
  const [volume, setVolume] = useState(50);

  const handleMouseDown = (e) => {
    console.log(e.target.value);
    window.getSelection().removeAllRanges();
    console.log(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setVolume(e.target.value);
  };

  const handleClick = (e) => {
    let icon = document.querySelector(".Playbar-icon");
    console.log();

    let stream = document.querySelector("#stream");
    // if (icon.src == playbtn) {
    //   icon.src = stopbtn;
    //   stream.play();
    // } else {
    //   icon.src = playbtn;
    //   stream.pause();
    // }
    // console.log(icon.src);
  };
  return (
    <div className="Playbar">
      <audio
        style={{
          display: "none",
        }}
        id="stream"
        src={`${"https://tupanel.info:8746/stream"}`}
        controls
      ></audio>
      <div className="Playbar_info">
        <div className="Playbar_info-image">
          <img src="/images/cover_test.jpg" alt="cover de album" />
        </div>
        <div className="Playbar_info-songname">
          <span>Nombre de cancion</span>
          <h6>Nombre de artista</h6>
        </div>
      </div>
      <div className="Playbar_controls">
        <div className="Playbar_controls-playbtn">
          <img
            className="Playbar-icon"
            src="/images/play_btn.png"
            alt="icono de play"
            // onClick={this.props.handleChangeRadio}
          />
        </div>
        <div className="Playbar_controls-volume">
          <input
            autoComplete="off"
            onMouseDown={handleMouseDown}
            onChange={handleChange}
            type="range"
            min="0"
            max="100"
          />
          <div id="etiqueta">{volume}</div>
        </div>
      </div>
      <style jsx>
        {`
          .Playbar {
            width: 100%;
            height: 60px;
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: lightgray;
            z-index: 20;
            display: flex;
          }
          .Playbar_info {
            flex: 0.5;
            display: flex;
            color: black;
            justify-content: flex-start;
            align-items: center;
            text-align: left;
          }
          .Playbar_controls {
            flex: 0.5;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          .Playbar_controls-playbtn {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .Playbar_controls-playbtn > img {
            width: 35px;
            cursor: pointer;
          }

          .Playbar_controls-playbtn:active {
            transform: scale(0.9);
          }
          .Playbar_controls-volume {
            width: 140px;
            display: flex;
          }
          .Playbar_controls-volume > input {
            width: 100px;
            background-color: transparent;
          }
          #etiqueta {
            width: 35px;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 4px;
          }
          .Playbar_info-image {
          }
          .Playbar_info-image > img {
            width: 45px;
            margin: 0 5px;
          }
          .Playbar_info-songname > h6 {
            margin: 0;
            padding: 0;
          }
          /* estilizar barra de nivel de volumen */
          .inputDiv {
            width: 250px;
            margin: 100px auto;
            position: relative;
          }

          input[type="range"] {
            display: block;
            width: 100%;
          }

          input[type="range"]:focus {
            outline: none;
          }

          input[type="range"],
          input[type="range"]::-webkit-slider-runnable-track,
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
          }

          input[type="range"]::-webkit-slider-thumb {
            background-color: #777;
            width: 20px;
            height: 20px;
            border: 2px solid #eeeff1;
            border-radius: 50%;
            margin-top: -9px;
          }

          input[type="range"]::-moz-range-thumb {
            background-color: #777;
            width: 15px;
            height: 15px;
            border: 3px solid #333;
            border-radius: 50%;
          }

          input[type="range"]::-ms-thumb {
            background-color: #777;
            width: 20px;
            height: 20px;
            border: 3px solid #333;
            border-radius: 50%;
          }

          input[type="range"]::-webkit-slider-runnable-track {
            background-color: #777;
            height: 3px;
          }

          input[type="range"]:focus::-webkit-slider-runnable-track {
            outline: none;
          }

          input[type="range"]::-moz-range-track {
            background-color: #777;
            height: 3px;
          }

          input[type="range"]::-ms-track {
            background-color: #777;
            height: 3px;
          }

          input[type="range"]::-ms-fill-lower {
            background-color: HotPink;
          }

          input[type="range"]::-ms-fill-upper {
            background-color: black;
          }

          #etiqueta {
            margin-left: 5px;
          }
        `}
      </style>
    </div>
  );
}

export default Playbar;

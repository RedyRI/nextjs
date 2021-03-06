import React from "react";
import { useState, useEffect } from "react";
import RadioCard from "../components/RadioCard";
import RadiosPageNavbar from "../components/RadiosPageNavbar";
import Navbar from "/components/Navbar";
import filterRadios from "../helpers/filterRadios";
import Playbar from "../components/Playbar";
import Head from "next/head";

function Radios() {
  const [list, setList] = useState([]);
  const [aux, setAux] = useState([]);
  useEffect(() => {
    fetch("https://epabackend.azurewebsites.net/radios")
      .then((res) => res.json())
      .then((response) => {
        setAux(response);
        setList(response);
      });
  }, []);

  const filterCity = (e) => {
    let name = document.querySelector("#nombre");
    let filteredRadios = filterRadios(list, e.target.value, name.value);
    setAux(filteredRadios);
  };

  const filterName = (e) => {
    let city = document.querySelector("#ciudad");
    let filteredRadios = filterRadios(list, city.value, e.target.value);
    setAux(filteredRadios);
  };
  return (
    <>
      <Head>
        <title>EPA - FM | RADIOS</title>
      </Head>
      <div className="Radios">
        <div className="Radios_header">
          <RadiosPageNavbar />
        </div>

        <h1>EPA FM</h1>
        <div className="Radios_filtro">
          <input
            id="nombre"
            onChange={filterName}
            className="Radios_filtro-input"
            type="text"
            placeholder="Que radio esuchar..."
          />
          <label className="select-label" htmlFor="ciudad">
            Ciudad:
          </label>
          <select
            onChange={filterCity}
            className="Radios_filtro-select"
            name="ciudad"
            id="ciudad"
          >
            <option className="select-option" value="" defaultValue>
              Todas
            </option>
            <option value="lima">Lima</option>
            <option value="cusco">Cusco</option>
            <option value="piura">Piura</option>
            <option value="trujillo">Trujillo</option>
            <option value="cajamarca">Cajamarca</option>
            <option value="chimbote">Chimbote</option>
            <option value="arequipa">Arequipa</option>
          </select>
        </div>
        <div className="Radios_list">
          {aux.map((e) => {
            return (
              <div key={e.id}>
                <RadioCard info={e} />
              </div>
            );
          })}
        </div>
        <footer className="Radios_footer"></footer>
      </div>
      <style jsx>
        {`
          .Radios {
            width: 100%;
            min-height: 100vh;
            padding-top: 60px;
            text-align: center;
            color: white;
            background: lightblue;
            background: lightblue;
            background-image: linear-gradient(
              to bottom,
              black 0%,
              black 30%,
              rgba(119, 129, 55, 1) 100%
            );
          }
          .Radios_list {
            display: flex;
            flex-wrap: wrap;
            min-height: 80vh;
            max-width: 1000px;
            margin: 0 auto;
            justify-content: space-evenly;
          }
          .Radios_filtro {
            width: 450px;
            background-color: white;
            margin: 0 auto;
            border-radius: 25px;
          }

          .Radios_filtro-input {
            padding: 5px 7px;
            border: none;
            outline: none;
            border-radius: 6px 0 0 6px;
            cursor: pointer;
            font-size: 12px;
            width: 250px;
          }
          .Radios_filtro-select {
            padding: 5px 7px;
            border: none;
            outline: none;
            border-radius: 0 6px 6px 0;
            font-size: 12px;
            cursor: pointer;
            width: 80px;
            background-color: rgba(255, 255, 255, 0.9);
          }
          .select-label {
            background-color: white;
            color: black;
            font-size: small;
            width: 50px;
          }
          .Radios_footer {
            width: 100%;
            height: 200px;
            background-color: black;
            padding-bottom: 50px;
            margin-top: 30px;
          }
        `}
      </style>
    </>
  );
}

export default Radios;

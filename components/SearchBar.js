import React, { useState, useEffect } from "react";
import Link from "next/link";
import filterRadios from "../helpers/filterRadios";
function SearchBar() {
  const [data, setData] = useState([]);
  const [aux, setAux] = useState([]);

  useEffect(() => {
    fetch("https://epabackend.azurewebsites.net/radios")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setAux(response);
      });
  }, []);

  const filter = (e) => {
    let filteredRadios = filterRadios(data, "", e.target.value);
    setAux(filteredRadios);
  };
  return (
    <>
      <div className="SearchBar-searchbar">
        <input type="text" onChange={filter} />
        <img src="/images/lupa.png" alt="icono busqueda" />
        <div className="results">
          <ul>
            {aux?.map((r) => {
              if (r.name == "home") {
                return "";
              }
              return (
                <li key={r.id}>
                  <Link href={r.to}>
                    <a>
                      <img src={r.logo} alt="" width="40px" height="40px" />
                      <span>{r.page}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .SearchBar-searchbar {
            background-color: white;
            padding: 10px 15px;
            font-family: "Oswald";
            font-size: "1rem";
            border-radius: 25px;
            display: flex;
            position: relative;
            cursor: pointer;
          }
          .SearchBar-searchbar > input {
            border: none;
            outline: none;
            width: 120px;
          }
          .SearchBar-searchbar > img {
            width: 20px;
            float: right;
            margin: 0 5px;
            cursor: pointer;
          }
          .SearchBar-searchbar > img::after {
            clear: both;
          }
          .SearchBar-searchbar > img:active {
            transform: scale(0.9);
          }
          .SearchBar-searchbar:hover > .results {
            display: flex;
          }
          .results {
            position: absolute;
            top: 40px;
            left: 0;
            width: 180px;
            height: 350px;
            display: none;
            overflow: scroll;
            background-color: rgba(0, 0, 0, 0.7);
          }

          .results::-webkit-scrollbar {
            display: none;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          ul li {
            display: block;
            width: 100%;
          }
          ul li a {
            display: block;
            width: 180px;
            display: flex;
            align-items: center;
            color: white;
          }
          ul li a:hover {
            background-color: rgba(255, 255, 255, 0.5);
          }
          ul li a img {
            margin: 5px 15px 5px 5px;
          }
        `}
      </style>
    </>
  );
}

export default SearchBar;

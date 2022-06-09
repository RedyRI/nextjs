import Link from "next/link";

function Header() {
  return (
    <>
      <style jsx>
        {`
          .Header {
            width: 100vw;
            height: 60px;
            position: fixed;
            top: 0;
            left: 0;
            background: black;
            z-index: 10;
          }
          .Header_bar {
            width: 80%;
            height: 60px;
            margin: 0 auto;
            display: flex;
          }
          .Header_bar-left {
            flex: 0.8;
            height: 60px;
          }
          .Header_bar-logo {
            width: 50px;
            float: left;
          }
          .Header_bar-logo::after {
            clear: both;
          }
          .Header_bar-right {
            flex: 0.2;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .Header_bar-searchbar {
            background-color: white;
            padding: 5px 7px;
            font-family: "Oswald";
            border-radius: 25px;
            display: flex;
          }
          .Header_bar-searchbar > input {
            border: none;
            outline: none;
            width: 100px;
          }
          .Header_bar-searchbar > img {
            width: 20px;
            float: right;
            margin: 0 5px;
            cursor: pointer;
          }
          .Header_bar-searchbar > img::after {
            clear: both;
          }
          .Header_bar-searchbar > img:active {
            transform: scale(0.9);
          }
        `}
      </style>
      <div className="Header">
        <div className="Header_bar">
          <div className="Header_bar-left">
            <Link href="/">
              <a>
                <img
                  className="Header_bar-logo"
                  src="/images/logoEPA.png"
                  alt="logo epa"
                />
              </a>
            </Link>
          </div>
          <div className="Header_bar-right">
            <div className="Header_bar-searchbar">
              <input type="text" />
              <img src="/images/lupa.png" alt="icono busqueda" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

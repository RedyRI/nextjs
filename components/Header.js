import Link from "next/link";
import SearchBar from "./SearchBar";

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
            z-index: 20;
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
            font-family: "Oswald";
            border-radius: 25px;
            display: flex;
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
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

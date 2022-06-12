import Link from "next/link";

function RadiosPageNavbar() {
  let id = 0;
  return (
    <>
      <style jsx>{`
        .Radios_navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 60px;
          background-color: black;
          z-index: 10;
        }
        .Radios_navbar-bar {
          width: 80vw;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .Radios_navbar-bar-logo {
          width: 55px;
          margin-right: 50px;
        }
        .Radios_navbar-bar > ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: inline-block;
        }
        .Radios_navbar-bar > ul > li {
          display: inline-block;
        }

        .Radios_navbar-link {
          display: block;
          color: white;
          background-color: black;
          font-family: "Oswald", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          padding: 15px 20px;
          transition: all 0.12s linear;
        }

        .Radios_navbar-link:hover {
          background-color: rgba(255, 255, 255, 0.8);
          color: black;
          border-radius: 10px;
        }
      `}</style>
      <div className="Radios_navbar">
        <div className="Radios_navbar-bar">
          <Link href="/">
            <a>
              <img
                className="Radios_navbar-bar-logo"
                src="/images/logoEPA.png"
                alt=""
              />
            </a>
          </Link>
          <ul>
            <li key={id++}>
              <Link href="/">
                <a className="Radios_navbar-link">Inicio</a>
              </Link>
            </li>
            <li key={id++}>
              <Link href="/radios">
                <a className="Radios_navbar-link">Radios</a>
              </Link>
            </li>
            <li key={id++}>
              <Link href="/contacto">
                <a className="Radios_navbar-link">Contacto</a>
              </Link>
            </li>
            <li key={id++}>
              <Link href="/nosotros">
                <a className="Radios_navbar-link">Nosotros</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RadiosPageNavbar;

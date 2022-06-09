import Link from "next/link";

function Navbar() {
  const pages = [
    {
      page: "Inicio",
      to: "/",
      icono: "/images/icono_inicio.png",
    },
    {
      page: "Radios",
      to: "/radios",
      icono: "/images/icono_radios.png",
    },
    {
      page: "Nosotros",
      to: "/nosotros",
      icono: "/images/icono_nosotros.png",
    },
    {
      page: "Contacto",
      to: "/contacto",
      icono: "/images/icono_contacto.png",
    },
  ];
  let id = 0;
  return (
    <>
      <style jsx>{`
        .Navbar {
          background-color: lightgray;
          top: 0;
          left: 0;
          width: 50px;
          overflow: hidden;
          position: relative;
          position: fixed;
          cursor: pointer;
          height: 100vh;
          transition: all linear 0.1s;
          z-index: 10;
        }
        .Navbar:hover {
          width: 210px;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          width: 210px;
        }
        li {
          display: block;
          color: black;
          transition: all 0.2s linear;
        }
        .Navbar_link {
          display: flex;
          align-items: center;
          width: 100%;
          font-family: "Oswald", sans-serif;
          font-weight: 600;
        }
        li:hover {
          background-color: black;
          color: white;
        }

        li:hover .Navbar_link-icono {
          filter: invert(1);
        }
        .Navbar_link-icono {
          width: 40px;
          margin: 5px 15px 5px 5px;
        }
      `}</style>
      <div className="Navbar">
        <ul>
          {pages.map((page) => {
            return (
              <li key={id++}>
                <Link href={page.to}>
                  <a className="Navbar_link">
                    <img
                      className="Navbar_link-icono"
                      src={page.icono}
                      alt=""
                    />
                    {page.page}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

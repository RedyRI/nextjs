function PageCard(props) {
  console.log();
  let especialLogo;
  let radio = props.info;
  especialLogo = radio.name == "oncesesenta" ? `${radio.artistas}` : "";
  return (
    <>
      <style jsx>{`
        .PageCard {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .PageCard__logo {
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .PageCard__logo.oncesesenta {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 60%;
          height: auto;
          transform: translate(-50%, 0);
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .PageCard__logo-img {
          width: 100%;
          height: auto;
        }
      `}</style>

      <div className="PageCard">
        <div
          className={`PageCard__logo ${
            radio.name == "oncesesenta" ? "oncesesenta" : ""
          }`}
        >
          <img
            className="PageCard__logo-img"
            src={especialLogo || radio.logo}
            alt={radio.name}
          />
        </div>
      </div>
    </>
  );
}

export default PageCard;

function RadioCard(props) {
  const info = props.info;
  if (info.name != "home") {
    return (
      <div>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap");
          .RadioCard {
            min-width: 200px;
            max-width: 200px;
            min-height: 200px;
            max-height: 200px;
            border-radius: 6px;
            padding: 9px;
            background-color: black;
            background-image: url("${info.logo}");
            background-size: 200px 200px;
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
            margin: 22px;
            flex-grow: 1;
            flex-shrink: 1;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .RadioCard_body-play {
            visibility: hidden;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: block;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.02s ease;
          }
          .RadioCard:hover > .RadioCard_body-play {
            visibility: visible;
          }
          .RadioCard_name {
            background-color: rgba(255, 255, 255, 0.7);
            width: 100%;
            color: black;
            font-family: "Oswald", sans-serif;
            border-radius: 25px;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 205px;
            left: 0;
          }
        `}</style>
        <div className="RadioCard">
          <div className="RadioCard_name">{info.page}</div>
          <div className="RadioCard_body-play"></div>
        </div>
      </div>
    );
  }
}

export default RadioCard;

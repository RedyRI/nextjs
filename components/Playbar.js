function Playbar() {
  return (
    <div className="Playbar">
      <div className="Playbar_container">
        <div className="Playbar_left"></div>
        <div className="Playbar_right"></div>
      </div>
      <style jsx>
        {`
          .Playbar {
            width: 100%;
            height: 50px;
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: lightgray;
          }
        `}
      </style>
    </div>
  );
}

export default Playbar;

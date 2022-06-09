import getData from "../helpers/getData";
import { useEffect, useState } from "react";
import filterRadios from "../helpers/filterRadios";
function Contacto() {
  let [data, setData] = useState([]);

  if (data.length > 0) {
    let v = filterRadios(data, "lima", "on");
    console.log(v);
  }

  useEffect(() => {
    let d = getData();
    d.then((r) => {
      setData(r.radios);
    });
  }, []);

  if (data.length == 0) {
    return (
      <div>
        <style jsx>{`
          p {
            color: red;
            text-align: center;
          }
        `}</style>
        <p>loading ...</p>
      </div>
    );
  } else {
    return <pre>{JSON.stringify(data, null, 4)}</pre>;
  }
}

export default Contacto;

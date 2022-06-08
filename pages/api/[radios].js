let id = 0;
const radiosinfo = {
  radios: [
    {
      id: ++id,
      name: "home",
      page: "Home",
      backgroundImage: "",
      backgroundColor:
        "radial-gradient(circle, rgba(5,89,0,0.75) 0%, rgba(0,0,0,1) 57%)",
      logo: `/images/logoEPA.png`,
      to: "/",
    },
    {
      id: ++id,
      name: "lanube",
      page: "La nube",
      backgroundImage: `/images/fondo_lanube.jpg`,
      logo: `/images/logo_lanube.png`,
      backgroundColor: "",
      stream: `https://streaming.gometri.com/stream/8025/stream`,
      to: "/radio/lanube",
    },
    {
      id: ++id,
      name: "cumbiamix",
      page: "Cumbia Mix",
      backgroundImage: `/images/fondo_cumbiamix.png`,
      logo: `/images/logo_cumbiamix.png`,
      backgroundColor: "",
      stream: `https://streaming.gometri.com/stream/8017/stream`,
      to: "/radio/cumbiamix",
    },
    {
      id: ++id,
      name: "ondacero",
      page: "Onda Cero",
      backgroundImage: "",
      backgroundColor: "radial-gradient(#FEE248 30%, #FFA01C 100%)",
      logo: `/images/logo_ondacero.png`,
      stream: `https://streaming.gometri.com/stream/8011/stream`,
      to: "/radio/ondacero",
    },
    {
      id: ++id,
      name: "panamericana",
      page: "Panamericana",
      backgroundImage: `/images/fondo_panamericana.png`,
      logo: `/images/logo_pana.png`,
      backgroundColor: "",
      stream: `https://streaming.gometri.com/stream/8000/stream`,
      to: "/radio/panamericana",
    },
    {
      id: ++id,
      name: "oncesesenta",
      page: "1160",
      backgroundImage: "/images/fondo_oncesesenta.png",
      logo: `/images/logo_oncesesenta.png`,
      artistas: `/images/artistas_oncesesenta.png`,
      backgroundColor: "",
      stream: `https://streaming.gometri.com/stream/8021/stream`,
      to: "/radio/oncesesenta",
    },
    {
      id: ++id,
      name: "lavaca",
      page: "Radio la vaca",
      backgroundImage: "",
      logo: `/images/logo_lavaca.png`,
      backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
      stream: `https://streaming.gometri.com/stream/8007/stream`,
      to: "/radio/lavaca",
    },
    {
      id: ++id,
      name: "radiocomas",
      page: "Radio Comas",
      backgroundImage: "",
      logo: `/images/logo_radiocomas.png`,
      backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
      stream: `http://65.60.2.26:8044/stream?icy=http`,
      to: "/radio/radiocomas",
    },
    {
      id: ++id,
      name: "vivafm",
      page: "Viva FM",
      backgroundImage: "",
      logo: `/images/logo_vivafm.jpg`,
      backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
      stream: `https://tupanel.info:8746/stream`,
      to: "/radio/vivafm",
    },
    {
      id: ++id,
      name: "exitosa",
      page: "Radio Exitosa",
      backgroundImage: "",
      logo: `/images/logo_exitosa.png`,
      backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
      stream: "http://167.114.118.120:7444/stream",
      to: "/radio/exitosa",
    },
    {
      id: ++id,
      name: "ondavip",
      page: "Onda cero Vip",
      backgroundImage: "",
      logo: `/images/logo_ondavip.png`,
      backgroundColor: "radial-gradient(#452F11 30%, #170F01 100%)",
      stream: `https://streaming.gometri.com/stream/8039/stream`,
      to: "/radio/ondavip",
    },
    {
      id: ++id,
      name: "ondafeeling",
      page: "Onda cero Feeling",
      backgroundImage: "",
      logo: `/images/logo_ondafeeling.png`,
      backgroundColor: "radial-gradient(#960C88 30%, #260023 100%)",
      stream: `https://streaming.gometri.com/stream/8035/stream`,
      to: "/radio/ondafeeling",
    },
    {
      id: ++id,
      name: "ondaleyendas",
      page: "Onda cero Leyendas",
      backgroundImage: `/images/fondo_leyendas.png`,
      logo: `/images/logo_ondaleyendas.png`,
      backgroundColor: "radial-gradient(#452F11 30%, #170F01 100%)",
      stream: `https://streaming.gometri.com/stream/8033/stream`,
      to: "/radio/ondaleyendas",
    },
  ],
};

export default function handler(req, res) {
  res
    .status(200)
    .json(
      req.query.radios == "radios"
        ? radiosinfo
        : radiosinfo.radios.filter((e) => e.name == req.query.radios)[0]
    );
}

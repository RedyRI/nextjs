import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function Slider(props) {
  const shadow = props.shadow;
  const data = props.data;
  const handleClick = (e) => {
    console.log("cliced");
  };
  console.log(`the array length is ${props.data.length}`);

  if (props.data.length == 0) {
    return (
      <>
        <div className="fallback">
          <h1>Loading ...</h1>
        </div>
        <style jsx>{`
          .fallback {
            width: 400px;
            height: 100px;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </>
    );
  }

  // console.log(data.length < 0 ? "data is no here yet" : "now we have data");
  return (
    <>
      <style jsx>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          .slider {
            margin: 0 auto;
            width: 460px;
            position: relative;
          }

          .slider::before {
            content: "<";
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.8);
            position: absolute;
            height: 100px;
            width: 100px;
            left: -50px;
            z-index: 10;
            background-image: linear-gradient(
              90deg,
              rgba(8, 3, 0, 0) 0%,
              ${shadow} 51%,
              rgba(0, 0, 0, 0) 100%
            );

            border-radius: 6px;
            mix-blend-mode: normal;
            pointer-events: none;
          }
          .slider::after {
            content: ">";
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.8);
            border-radius: 6px;
            position: absolute;
            height: 100px;
            width: 100px;
            left: 410px;
            top: 0;
            z-index: 10;
            background-image: linear-gradient(
              90deg,
              rgba(8, 3, 0, 0) 0%,
              ${shadow} 51%,
              rgba(0, 0, 0, 0) 100%
            );
            pointer-events: none;
            mix-blend-mode: normal;
          }

          .img_cont {
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            transition: all 0.5 ease;
          }

          .img_cont:hover {
            transform: scale(1.05);
          }
          .slider_img {
            width: 100%;
            height: auto;
          }
          .mostarTodas {
            width: 100px;
            height: 100px;
            background-color: rgba(0, 0, 0, 0.4);
            background-image: radial-gradient(
              circle,
              rgba(0, 0, 0, 1) 0%,
              rgba(5, 89, 0, 0.75) 50%
            );
            margin: auto auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Oswald", sans-serif;
            border-radius: 10px;
          }
          .mostarTodas:hover {
            transform: scale(1.05);
          }
          .mostarTodas-a {
            display: block;
            color: white;
            font-size: 1rem;
            text-align: center;
          }
        `}
      </style>
      <div className="slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((item) => {
            if (item.name != "home") {
              console.log();
              return (
                <SwiperSlide key={item.id}>
                  <Link href={`${item.to}`}>
                    <a onClick={handleClick} className="img_cont">
                      <img className="slider_img" src={item.logo} />
                    </a>
                  </Link>
                </SwiperSlide>
              );
            }
          })}
          <SwiperSlide key="unique">
            <div className="mostarTodas">
              <Link href="/radios">
                <a className="mostarTodas-a">TODAS LAS RADIOS</a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;

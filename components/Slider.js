import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider(props) {
  let handleClick = (e) => {
    console.log("cliced");
  };

  return (
    <>
      <style jsx>
        {`
          .slider {
            margin: 0 auto;
            width: 460px;
            border: solid red 4px;
          }
          .img_cont {
            border-radius: 10px;
            overflow: hidden;
            border: solid black 1px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
          }
          .slider_img {
            width: 100%;
            height: auto;
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
          {props.data?.map((item) => {
            if (item.name != "home") {
              console.log();
              return (
                <SwiperSlide key={item.id}>
                  <Link className="" href={`${item.to}`}>
                    <a onClick={handleClick} className="img_cont">
                      <img className="slider_img" src={item.logo} />
                    </a>
                  </Link>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;

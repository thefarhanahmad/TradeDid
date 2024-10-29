import React from "react";
import serviceBg from "../../assets/service-card.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const ServiceCard = ({ heading, data }) => {
  return (
    <div className="border z-10 border-cyan-400 p-4 rounded-md">
      <div className="text-white">
        <h1 className="text-2xl font-bold text-start text-black mb-3">
          {heading}
        </h1>

        {/* Cards */}
        <div className=" bg-red-400 overflow-hidden">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${serviceBg})`,
                  }}
                  className="relative h-[200px]  border border-cyan-200 text-black rounded-lg p-6 overflow-hidden transition-transform duration-300 hover:scale-[1.02] group"
                >
                  <div className="relative z-10 ">
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

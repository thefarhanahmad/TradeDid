import React from "react";
import serviceBg from "../../assets/service-card.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const DIDNumbersSection = ({ data, texts }) => {
  return (
    <div className="relative  py-12 md:py-16 bg-gradient-to-b from-[#b7d0f8] to-[#e4f1f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-center w-full md:w-3/4 mx-auto text-2xl md:text-4xl font-bold text-[#134391] mb-3">
          {texts?.beforeText}{" "}
          <span className="text-orange-500 mx-2">{texts?.spanText}</span>
          {texts?.afterText}
        </h2>
        <p className="text-center text-lg md:text-xl font-bold text-[#134391] mb-8">
          {texts?.subPara}
        </p>

        {/* Grid cards */}
        <div className="lg:grid hidden  w-[75%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((card, index) => (
            <div
              style={{
                backgroundImage: `url(${serviceBg})`,
              }}
              key={index}
              className="flex flex-col h-[180px] overflow-hidden  p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-[#134391] mb-2">
                {card?.title}
              </h3>
              <p className="text-gray-600">{card?.description}</p>
            </div>
          ))}
        </div>

        {/* Swiper cards */}
        <div className=" lg:hidden overflow-hidden">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]} // Add Autoplay module
            className="mySwiper"
            spaceBetween={0}
            loop={true} // Enable looping
            autoplay={{
              delay: 3000, // Time between slides (in milliseconds)
              disableOnInteraction: false, // Allow autoplay to continue after user interactions
            }}
            breakpoints={{
              640: {
                // For small devices
                slidesPerView: 1, // 1 slide
                spaceBetween: 0, // No space
              },
              768: {
                // For medium devices (tablets)
                slidesPerView: 2, // 2 slides
                spaceBetween: 20, // Space between slides
              },
              1024: {
                // For large devices (laptops and desktops)
                slidesPerView: 3, // 3 slides
                spaceBetween: 20, // Space between slides
              },
            }}
          >
            {data?.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundImage: `url(${serviceBg})`,
                  }}
                  key={index}
                  className="flex flex-col h-[180px]  p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-[#134391] mb-2">
                    {card?.title}
                  </h3>
                  <p className="text-gray-600">{card?.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DIDNumbersSection;

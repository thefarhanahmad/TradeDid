import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import linkBg from "../../assets/link-bg.jpg";

// Import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const BusinessCard = ({ data, heading }) => {
  return (
    <div className="flex flex-col overflow-hidden  pt-8 pr-3">
      <h1 className="text-2xl ml-14 text-[#023f7f]">{heading}</h1>
      <Swiper
        slidesPerView={1} // Default for small screens
        centeredSlides={false} // Disable centered slides for larger screens
        slidesPerGroup={1} // Default for small screens
        grabCursor={true}
        initialSlide={0} // Start from the first slide
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          // Breakpoints for larger screens
          769: {
            slidesPerView: 3, // Show 3 slides on larger screens
            slidesPerGroup: 3, // Group 3 slides together for navigation
            centeredSlides: false, // Disable centered slides
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-56 p-5 text-center  mb-2 px-8 flex  items-center justify-center">
              <span
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-vector/modern-flowing-colorful-wave-banner-background_1035-19861.jpg?semt=ais_hybrid")`,
                  backgroundRepeat: "no-repeat", // Prevent image repetition
                  backgroundSize: "cover", // Ensure the background image covers the entire div
                }}
                className="text-lg  p-5 rounded-md border border-[#7fb2ea] overflow-hidden w-[92%] h-full relative cursor-pointer flex justify-center group bg-white items-center font-semibold"
              >
                {item}
                <span className="w-full bg-sky-200 text-[#023f7f] absolute text-center -bottom-12 py-2 group-hover:bottom-0 transition-all duration-200">
                  Learn More
                </span>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BusinessCard;

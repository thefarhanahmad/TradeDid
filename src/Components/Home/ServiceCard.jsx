import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function SwiperContent({ data, heading }) {
  return (
    <div className="w-full overflow-hidden">
      <h1 className="mb-2 text-2xl text-[#023f7f]">{heading}</h1>
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
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage:
                  "url('https://webgradients.com/public/webgradients_png/015%20Mean%20Fruit.png')",
                backgroundRepeat: "no-repeat", // Prevent image repetition
                backgroundSize: "cover", // Ensure the background image covers the entire div
              }}
              className="border overflow-hidden rounded-xl mx-auto w-full h-64 flex items-center justify-center text-center"
            >
              <div className="p-4">
                <h2 className="text-black font-bold text-xl mb-2">
                  {item.title}
                </h2>
                <p className="text-black">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

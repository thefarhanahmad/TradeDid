import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Nat Rudy",
      company: "C3ntro Telecom",
      position: "Carrier Interconnection Manager",
      testimonial:
        "\"Always with the best disposition to serve us. TRADEDID has helped us in fulfilling our customer's needs, when it comes to provide them with the numbering solutions, when most of the time the requests get to us as urgent ones. Apart from everything else, it's also fun and easy to work with TRADEDID.\"",
      logo: "https://www.didww.com/_next/static/media/c3ntro.ea6c7bc9.png",
    },
    {
      name: "Dragan Gajovic",
      company: "Air Serbia",
      position: "IT Service Manager",
      testimonial:
        '"We had a very fast integration with our IP voice system and their accessible and open procedures helped us reach our goals. During our contact center transition from an in-house solution to outsource solution, there weren\'t any outages. The onboarding process was simple, fast and with substantial assistance."',
      logo: "https://www.didww.com/_next/static/media/airserbia.de461907.png",
    },
    {
      name: "Andriy Azarov",
      company: "Nectar Desk Inc.",
      position: "CEO",
      testimonial:
        '"Virtual numbers and Phone Systems are essential parts of our offering, therefore TRADEDID is one of the key components in our infrastructure. They have great support and high quality service. We became a client of TRADEDID when we were very small, but still were treated in a proper way and were able to discuss business conditions, which helped our growth."',
      logo: "https://www.didww.com/_next/static/media/nectar-desk.aaaef7b2.png",
    },
  ];

  return (
    <div className="bg-[#e6f9ff] py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl h-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-12">
          Trusted by professionals
        </h2>
        {/* Adjusted container to be full height */}
        <div className=" overflow-hidden">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-full"
            spaceBetween={0}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-full ">
                <div className="bg-white h-96 rounded-lg shadow-lg p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#003366]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-700 italic">
                      {testimonial.testimonial}
                    </p>
                  </div>
                  <div className="mt-4 flex self-end  w-32 rounded-full">
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="text-center text-[#003366] opacity-80 cursor-pointer pt-4">
        More success stories
      </div>
    </div>
  );
}

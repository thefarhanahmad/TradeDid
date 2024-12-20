import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function SecondSection() {
  const data = [
    {
      title: "DID Numbers and SIP Trunking worldwide",
      bg: "bg-[#023f7f]",
      text: "text-white",
      image:
        "https://www.didww.com/_next/static/media/earth-space.b9825bf4.webp", // Placeholder image
      heading: "DID Numbers for Global Coverage",
      description:
        "Seamless connectivity with DID numbers and SIP trunking across the globe. High-quality voice and SMS communication available worldwide.",
    },
    {
      title: "Private Voice and SMS network",
      bg: "bg-[#e3fbf8]",
      text: "text-[#023f7f]",
      image:
        "https://www.didww.com/_next/static/media/bridge-cloud.537062dc.webp",
      heading: "Secure Private Voice Network",
      description:
        "Experience a secure private voice and SMS network that ensures privacy and reliability for all your communication needs.",
    },
    {
      title: "Profitable business decision",
      bg: "bg-[#ff935c]",
      text: "text-white",
      image: "https://www.didww.com/_next/static/media/woman.e435b0c9.webp",
      heading: "Make Profitable Business Choices",
      description:
        "Make smart and profitable business decisions with our cost-effective VoIP solutions tailored for global enterprises.",
    },
    {
      title: "Self-service user portal",
      bg: "bg-[#27a3e5]",
      text: "text-white",
      image:
        "https://www.didww.com/_next/static/media/typing-in-dashboard.1fedd3da.webp",
      heading: "Easy Self-Service User Portal",
      description:
        "Manage your services effortlessly with our self-service user portal, designed to give you full control of your account.",
    },
    {
      title: "Extensive REST API",
      bg: "bg-[#595959]",
      text: "text-white",
      image: "https://www.didww.com/_next/static/media/developer.a7663714.webp",
      heading: "Comprehensive REST API",
      description:
        "Integrate our extensive REST API into your existing systems for a seamless, automated communication experience.",
    },
  ];

  // State to keep track of the selected item
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 pb-8 pt-12 md:py-20 font-sans">
        <header className="text-center px-1 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#023f7f]">
            <span>Why do customers choose</span>
            <span className="text-orange-500 mx-2">TRADEDID</span>?
          </h1>
          <p className="text-lg md:text-2xl text-[#023f7f]">
            The VoIP platform for telecommunication and business professionals
          </p>
        </header>
        {/* Large display view */}
        <div className="hidden md:flex flex-col">
          <div className="flex  w-full justify-center gap-4 mb-8">
            {data?.map((feature, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative cursor-pointer flex items-center justify-center p-4 w-[18%] md:h-44 h-44 ${
                  feature.bg
                } ${
                  feature.text
                } text-center font-bold text-lg md:text-xl rounded-xl transition-transform duration-200 ease-in-out ${
                  selectedIndex === index
                    ? "-translate-y-2"
                    : "hover:translate-y-[-8px]"
                }`}
              >
                {feature.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row w-[96%] mx-auto text-[#023f7f] rounded-2xl overflow-hidden">
            <div className="md:w-[60%]">
              <img
                src={data[selectedIndex].image}
                alt={data[selectedIndex].heading}
                width={600}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div
              className={`md:w-[40%] p-6 flex flex-col justify-center ${data[selectedIndex].bg} ${data[selectedIndex].text}`}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {data[selectedIndex].heading}
              </h2>
              <p className="mb-4">{data[selectedIndex].description}</p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-2xl self-start hover:bg-orange-600 transition-colors">
                See our coverage
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Views swiper */}
        <div className="flex md:hidden overflow-hidden">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]} // Add Autoplay module
            className="mySwiper"
            spaceBetween={0}
            loop={true} // Enable looping
            // autoplay={{
            //   delay: 3000, // Time between slides (in milliseconds)
            //   disableOnInteraction: false, // Allow autoplay to continue after user interactions
            // }}
            breakpoints={{
              640: {
                // For small devices
                slidesPerView: 1, // 1 slide
                spaceBetween: 0, // No space
              },
              768: {
                // For medium devices (tablets)
                slidesPerView: 1, // 1 slides
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
                <div className="flex flex-col md:flex-row w-[96%] mx-auto text-[#023f7f] rounded-2xl overflow-hidden">
                  <div className="md:w-[60%]">
                    <img
                      src={item?.image}
                      alt={item?.heading}
                      width={600}
                      className="w-full h-[200px] md:h-[400px] object-cover"
                    />
                  </div>
                  <div
                    className={`md:w-[40%] p-6 flex flex-col justify-center ${item?.bg} ${item?.text}`}
                  >
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                      {item?.heading}
                    </h2>
                    <p className="mb-4">{item?.description}</p>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-2xl self-start hover:bg-orange-600 transition-colors">
                      See our coverage
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const TopSection = () => {
  const texts = [
    "with Toll Free Numbers",
    "with local SIP Trunks",
    "with global Voice and SMS",
    "with Emergency Calling",
    "with mission-critical comms",
    "with local access, globally",
    "with DID Numbers",
    "with phone.systems™",
  ]; // Array of texts to cycle through
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [scale, setScale] = useState(1.02);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 2500);

    const scaleTimeout = setTimeout(() => {
      setScale(1);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(scaleTimeout);
    };
  }, []);

  return (
    <div
      className="w-full relative bg-cover bg-center h-[80vh] pt-12 md:pt-0 md:h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.didww.com/_next/static/media/main.58949e2c.webp')",
        transform: `scale(${scale})`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="p-8 text-white h-[72%] md:w-[69%] w-[100%]  mx-auto flex flex-col gap-4 justify-center items-center text-center md:text-start md:items-start">
        <h1 className="text-2xl md:text-5xl font-bold mb-2 text-[#023f7f]">
          Remove the boundaries
        </h1>
        <p
          className={`text-xl md:text-4xl mb-4 text-orange-500 ml-1 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[currentIndex]}
        </p>
        <div>
          <button className="bg-orange-500 hover:bg-orange-600 rounded-2xl text-white py-1 px-4 md:py-2 md:px-4 mr-4">
            Sign up now
          </button>
          <button className="bg-[#023f7f] hover:bg-[#143556] rounded-3xl text-white py-1 px-4 md:py-2 md:px-4">
            Request a demo
          </button>
        </div>
      </div>
      <div className="absolute -right-20 hidden md:flex top-8 scale-75">
        <img
          className="object-cover scale-110"
          src="https://www.didww.com/_next/static/media/hill.b6949286.webp"
          alt="background"
        />
      </div>
    </div>
  );
};

export default TopSection;

import React, { useState, useEffect, useRef } from "react";

const EnterpriseCommunication = () => {
  // States to control the visibility of each section
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  const firstSectionRef = useRef(null); // Ref for the first container
  const secondSectionRef = useRef(null); // Ref for the second container

  // Observer for the first container
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay visibility for smooth transition
            setTimeout(() => {
              setIsFirstVisible(true);
            }, 500); // 0.5 second delay
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (firstSectionRef.current) {
      observer.observe(firstSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) {
        observer.unobserve(firstSectionRef.current);
      }
    };
  }, []);

  // Observer for the second container
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay visibility for smooth transition
            setTimeout(() => {
              setIsSecondVisible(true);
            }, 500); // 0.5 second delay
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* First Container */}
      <div
        ref={firstSectionRef} // Attach the first ref here
        className="relative w-full pt-10 flex overflow-hidden min-h-[75vh]"
      >
        {/* Left background image */}
        <div
          className="absolute flex justify-center overflow-hidden items-center -left-12 top-0 h-[100%] w-1/2 md:w-1/4 bg-no-repeat bg-left bg-contain"
          style={{
            backgroundImage:
              'url("https://www.didww.com/_next/static/media/left-portrait.f22dab17.webp")',
          }}
        />

        {/* Main content with smooth transition */}
        <div
          className={`absolute md:flex md:left-1/4 md:-ml-12 top-0 px-3 md:px-0 mt-8 md:mt-0 h-full z-30 items-center md:justify-start transition-opacity duration-1000 ${
            isFirstVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="md:max-w-xl max-w-full text-center md:text-start">
            <h1 className="text-xl md:text-4xl font-bold text-blue-900">
              Quality services for enterprise communications
            </h1>
            <p className="mt-4 text-sm md:text-lg text-gray-700">
              Scalable and fully compliant global backbone for your business
              telephony. Free number porting, customized onboarding and pricing.
              Benefit from secure and reliable global connectivity.
            </p>
            <button className="mt-4 px-6 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
              Get enterprise plan
            </button>
          </div>
        </div>

        {/* Right background image */}
        <div
          className="absolute md:-right-32 -right-48 flex justify-center items-center -top-16 h-[100%] md:w-1/2 w-full bg-no-repeat bg-right bg-contain"
          style={{
            backgroundImage:
              'url("https://www.didww.com/_next/static/media/right-portrait.bc83a4eb.webp")',
          }}
        />
      </div>

      {/* Second Container */}
      <div
        ref={secondSectionRef} // Attach the second ref here
        style={{
          backgroundImage:
            'url("https://www.didww.com/_next/static/media/mountains-1920.1f828b0a.webp")',
        }}
        className="w-full md:pt-8 overflow-hidden flex md:flex-row flex-col-reverse justify-evenly items-start min-h-[70vh] bg-cover bg-no-repeat"
      >
        <div className="h-full w-[80%] md:w-[55%] self-start md:self-end -ml-20 pt-6 md:pt-0 md:-ml-48 -mb-14 overflow-hidden">
          <img
            src="https://www.didww.com/_next/static/media/bottom-portrait.3359a3e9.webp"
            alt="https://www.didww.com/_next/static/media/bottom-portrait.3359a3e9.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`h-full w-full px-10 md:mt-8 mt-0 md:p-0 text-center md:text-start md:w-[40%] transition-opacity duration-1000 ${
            isSecondVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-xl md:text-4xl font-bold text-blue-900">
            Relationships are our foundation
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-700">
            Free support from highly professional, competent and friendly staff,
            whenever you need - 24/7/365.
          </p>
          <button className="mt-4 px-6 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default EnterpriseCommunication;

export default function Helicopter() {
  return (
    <div className="bg-gradient-to-b from-orange-300 to-blue-100 px-4 md:px-8 py-12">
      <h1 className="mb-4  flex justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
        <div className="w-[80%] mx-auto">
          Making <span className="text-orange-500">Emergency calls</span>
          through the VoIP network
        </div>
      </h1>
      <div className="max-w-7xl mx-auto  rounded-xl  overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          <div className="md:w-2/3 relative">
            <img
              src="https://www.didww.com/_next/static/media/helicopter-desktop.4691671a.webp"
              alt="Emergency Helicopter"
              width={800}
              height={600}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="md:w-1/3 p-6 space-y-8  border-l-2 border-orange-500">
            <div>
              <h2 className="text-2xl font-bold relative text-blue-800 mb-2 flex items-center">
                <span className="w-4 h-4 md:absolute md:-left-8 md:top-3  bg-orange-500 rounded-full mr-2"></span>
                Regulatory Compliance
              </h2>
              <p className="text-gray-600">
                At DIDWW we meet the highest standards of regulatory compliance,
                ensuring hassle-free and reliable connectivity to the
                corresponding Public Safety Answering Point (PSAP).
              </p>
              <p className="mt-4 text-gray-600">
                Our Emergency Calling service provides peace of mind and
                fulfills the legal obligation of on-site access to local
                emergency services for your business worldwide.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold relative text-blue-800 mb-2 flex items-center">
                <span className="w-4 h-4  bg-orange-500 md:absolute md:-left-8 md:top-3 rounded-full mr-2"></span>
                Mission-critical reliability
              </h2>
              <p className="text-gray-600">
                Having a reliable communication service provider is crucial in
                times of emergencies. Our private geo-redundant global network
                infrastructure is designed to deliver every single call,
                ensuring access to emergency services when it matters the most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

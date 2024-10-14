import ImageAnimation from "./ImageAnimation";

export default function SecondSection() {
  return (
    <div className="w-full ">
      <div className="max-w-5xl mx-auto px-4 pb-8 py-16 md:py-20 font-sans">
        <header className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-4 text-[#023f7f]">
            <span>Why do customers choose</span>
            <span className="text-orange-500 mx-2">DIDWW</span>?
          </h1>
          <p className="text-2xl text-[#023f7f]">
            The VoIP platform for telecommunication and business professionals
          </p>
        </header>

        <div className="flex flex-wrap  justify-center gap-4 mb-8">
          {[
            {
              title: "DID Numbers and SIP Trunking worldwide",
              bg: "bg-[#023f7f]",
              text: "text-white",
            },
            {
              title: "Private Voice and SMS network",
              bg: "bg-[#e3fbf8]",
              text: "text-[#023f7f]",
            },
            {
              title: "Profitable business decision",
              bg: "bg-[#ff935c]",
              text: "text-white",
            },
            {
              title: "Self-service user portal",
              bg: "bg-[#27a3e5]",
              text: "text-white",
            },
            {
              title: "Extensive REST API",
              bg: "bg-[#595959]",
              text: "text-white",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative cursor-pointer flex items-center justify-center p-4 w-44 h-44 ${feature.bg} ${feature.text} text-center font-bold text-2xl rounded-xl transition-transform duration-200 ease-in-out hover:translate-y-[-8px]`}
            >
              {feature.title}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-[96%] mx-auto text-[#023f7f] rounded-2xl overflow-hidden">
          <div className="md:w-[60%]">
            <img
              src="https://www.didww.com/_next/static/media/earth-space.b9825bf4.webp"
              alt="Earth from space"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-[40%] p-6 flex flex-col justify-center bg-[#023f7f] text-white">
            <h2 className="text-2xl font-bold mb-4">
              Compliant two-way SIP Trunking, everywhere
            </h2>
            <p className="mb-4">
              Full global compliance in 81 countries and 5232 areas. Readily
              available Landline, Mobile and Toll Free Phone Numbers and two-way
              local SIP Trunking. Licensed or directly partnered with a local
              carrier in every country.
            </p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded self-start hover:bg-orange-600 transition-colors">
              See our coverage
            </button>
          </div>
        </div>

        <header className="text-center mt-20">
          <h1 className="text-3xl font-bold mb-4 text-[#023f7f]">
            Over <span className="text-orange-500 mx-2">1000</span> industry
            leaders rely on DIDWW
          </h1>
        </header>
      </div>

      {/* Image animation */}
      <ImageAnimation />
    </div>
  );
}

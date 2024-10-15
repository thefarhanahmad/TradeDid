export default function Testimonial() {
  const testimonials = [
    {
      name: "Nat Rudy",
      company: "C3ntro Telecom",
      position: "Carrier Interconnection Manager",
      testimonial:
        "\"Always with the best disposition to serve us. DIDWW has helped us in fulfilling our customer's needs, when it comes to provide them with the numbering solutions, when most of the time the requests get to us as urgent ones. Apart from everything else, it's also fun and easy to work with DIDWW.\"",
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
        '"Virtual numbers and Phone Systems are essential parts of our offering, therefore DIDWW is one of the key components in our infrastructure. They have great support and high quality service. We became a client of DIDWW when we were very small, but still were treated in a proper way and were able to discuss business conditions, which helped our growth."',
      logo: "https://www.didww.com/_next/static/media/nectar-desk.aaaef7b2.png",
    },
  ];

  return (
    <div className="bg-[#e6f9ff] min-h-[60vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-12">
          Trusted by professionals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#003366]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonial.position}
                </p>
                <p className="text-sm text-gray-700 italic">
                  {testimonial.testimonial}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-[#003366] opacity-80 cursor-pointer text pt-4">
        More success stories
      </div>
    </div>
  );
}

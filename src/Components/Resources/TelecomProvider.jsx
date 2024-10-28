import React from "react";

const cardData = [
  {
    title: "Organization Memberships",
    description:
      "DIDWW is a proud member and contributor to key telecommunications associations, including the International Telecommunication Union (ITU), RIPE Network Coordination Centre, GSMA, and CFCA.",
    bgImage:
      "https://www.didww.com/_next/static/media/organizations.35ec5f5a.webp",
  },
  {
    title: "Licensed Operator",
    description:
      "Our ever-growing list of regional telecommunication licenses and own phone number ranges ensure fully compliant Voice and SMS services locally and globally.",
    bgImage:
      "https://www.didww.com/_next/static/media/licenced-operator.974aa0d2.webp",
  },
  {
    title: "Global Phone Numbers",
    description:
      "DIDWW has been allocated an international phone number range with the prefix +883 by the ITU, further enabling the delivery of innovative global telecommunication services.",
    bgImage: "https://www.didww.com/_next/static/media/global.286be714.webp",
  },
  {
    title: "Social Responsibility",
    description:
      "We are proud as a company to play a role in nurturing the values of social responsibility. All of our team members are actively involved in providing support and resources for organizations and initiatives such as local child day care centers, animal shelters, and youth sports teams.",
    bgImage:
      "https://www.didww.com/_next/static/media/responsibility.1818c782.webp",
  },
  {
    title: "Environmental Footprint",
    description:
      "At DIDWW, we understand that caring for the environment is our responsibility. We aim to reduce our ecological footprint in all our offices by recycling, driving bicycles or electric scooters to and from work, and using reusable food containers and utensils for our office lunches. DIDWW believes that every small action makes a big difference.",
    bgImage: "https://www.didww.com/_next/static/media/footprint.910bbeda.webp",
  },
  {
    title: "Telephony Museum",
    description:
      "Inspired by the incredible development of the telecommunications industry and understanding the importance of education, DIDWW founded the Telephony Museum in 2019. This innovative and modern museum, located in Siauliai, Lithuania, offers access to an extensive collection of exhibits and various educational programs on the history and development of telephony.",
    bgImage: "https://www.didww.com/_next/static/media/museum.64a2f630.webp",
  },
];

const TelecomProvider = () => {
  return (
    <div className=" bg-gradient-to-b py-12 to-white from-blue-50">
      <div className=" p-6 w-3/4 mx-auto">
        <h1 className="text-center text-2xl font-bold mb-6">
          <span className="text-orange-500">Next generation</span>{" "}
          telecommunications solution provider
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative h-96 p-1 rounded-lg shadow-md overflow-hidden"
            >
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                }}
                className="absolute inset-0 bg-cover bg-center"
              ></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
              {/* Content */}
              <div className="relative p-6 z-10">
                <h2 className="text-[#134391] text-xl font-semibold mb-4">
                  {card.title}
                </h2>
                <p className="text-[#134391]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TelecomProvider;

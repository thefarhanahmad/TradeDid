import React, { useState } from "react";

// Sample data for countries (you can replace this with your own data)
const countriesData = [
  "Albania",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Australia",
  "Austria",
  "Bahamas",
  "Barbados",
  "Brazil",
  "British Virgin Islands",
  "Bulgaria",
  "Canada",
  "Bosnia And Herzegovina",
  "Cayman Islands",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  // Add more countries as needed
];

const CountriesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10; // Set how many countries you want per page

  // Filter countries based on search term
  const filteredCountries = countriesData.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current countries for the page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  return (
    <div className="w-full bg-gradient-to-b from-[#2a5296] to-white py-12 px-4">
      <div className="container mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by country or prefix"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-[#2a5296] transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Countries List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {currentCountries.map((country, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <span className="mr-2 text-2xl">🌍</span>
              <span className="text-lg font-semibold">{country}</span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-full transition duration-200 
                      ${
                        currentPage === index + 1
                          ? "bg-[#2a5296] text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-[#2a5296] hover:text-white"
                      }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;

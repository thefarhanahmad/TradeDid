import { useState } from "react";

export default function PriceList() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className=" bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-center text-4xl font-extrabold">
          <span className="text-orange-500">Download</span>{" "}
          <span className="text-[#134391]">the TRADEDID'S price list</span>
        </h1>
        <h2 className="mt-2 text-center text-xl text-gray-600">
          Tiered wholesale prices available
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-5xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex w-full justify-between gap-6  items-center">
            <form onSubmit={handleSubmit} className="space-y-6 w-[50%]">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="companyName" className="sr-only">
                  Company name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="sr-only">
                  Email address
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Subscribe me to news and updates
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Get price list
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center w-[50%]">
              <img
                src="https://cdn.vectorstock.com/i/preview-1x/18/96/pile-text-books-with-laptop-vector-24451896.webp"
                alt="TRADEDID Price List Book"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

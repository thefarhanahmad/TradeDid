export default function QuoteRequest() {
  return (
    <div className="py-12 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
      <div className="  flex justify-between flex-col-reverse gap-10 md:gap-6 md:flex-row items-center rounded-3xl p-6 md:p-8 max-w-4xl w-full relative overflow-hidden">
        <div className="  w-full md:w-[50%] flex  flex-col items-center md:items-start gap-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Request <span className="text-orange-500">a quote</span>
          </h2>
          <p className="text-blue-600 mb-8">
            Get an offer tailored for your business
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Get your quote
          </button>
        </div>
        <div className=" flex w-full md:w-[50%] h-full  gap-0 ">
          <div className="w-[33%]    h-[9.5rem] relative overflow-hidden">
            <span className="bg-sky-400 w-14 h-14 absolute bottom-0 right-0 rounded-xl overflow-hidden"></span>
          </div>
          <div className="w-[33%]   h-[9.5rem] flex flex-col gap-2 md:items-start items-center md:ml-2 justify-end relative overflow-hidden">
            <span className=" bg-teal-400 w-20 h-24 rounded-xl overflow-hidden"></span>
            <span className="bg-orange-400 w-20 h-24 rounded-xl overflow-hidden"></span>
          </div>
          <div className="w-[33%]    h-[9.5rem] flex flex-col items-start md:-ml-11 gap-2 justify-end relative overflow-hidden">
            <span className=" bg-teal-400 w-14 h-14 self-start rounded-xl overflow-hidden"></span>
            <span className="bg-blue-700 w-20 h-[75px] rounded-xl overflow-hidden"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

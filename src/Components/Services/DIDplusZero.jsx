export default function DIDPlusZero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full  rounded-xl  p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#134391]">DID+0</span> and{" "}
          <span className="text-[#134391]">DID+2</span>{" "}
          <span className="text-orange-500">virtual number modes</span>
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Enjoy the freedom of automatically including inbound channels with
          phone numbers, or benefit from the flexibility of setting up your own
          unique Capacity models.
        </p>

        <div className="flex flex-col  mt-4x md:justify-center md:flex-row gap-8">
          <div className=" flex flex-col justify-center items-center gap-8">
            <div>
              <img
                src="https://www.didww.com/_next/static/media/orange-lines.2004af0e.webp"
                alt=""
              />
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold text-[#134391] mb-4">DID+0</h2>
              <p className="text-gray-600">
                Local, National and Mobile Numbers with
                <br />
                no voice channels included.
              </p>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-8">
            <div>
              <img
                src="https://www.didww.com/_next/static/media/blue-lines.7e5ee0b4.webp"
                alt=""
              />
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold text-[#134391] mb-4">DID+2</h2>
              <p className="text-gray-600">
                Local, National and Mobile Numbers
                <br />
                bundled with two dedicated voice channels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mt-6 w-full  rounded-xl  p-8">
        <h1 className="text-3xl md:text-4xl md:w-3/4 mx-auto font-bold text-center mb-4">
          <span className="text-[#134391]">
            Build your own capacity model with additional
          </span>

          <span className="text-orange-500 mx-2">voice channels</span>
        </h1>
        <p className="text-center text-gray-600 mb-12">
          TRADEDID Capacity modes for maximum flexibility and efficiency
        </p>

        <div className=" flex-col flex gap-4">
          <div className=" flex flex-col md:flex-row w-full justify-between md:justify-center md:gap-10 items-center md:items-start">
            <div className=" md:w-[46%] ">
              <img
                src="https://www.didww.com/_next/static/media/blue-lines.7e5ee0b4.webp"
                alt=""
              />
            </div>
            <div className=" md:w-[46%] flex flex-col gap-2">
              <h1 className="text-3xl text-[#134391]">Flate-rate</h1>
              <p className="text-[#2b58a0]">
                Flat-rate voice channels are designed for customers with
                predictable call volumes. Channels may be instantly assigned or
                unassigned from a single DID or group of DIDs. There are no
                per-minute charges for calls using the flat-rate option,
                instead, there is a fixed volume-based monthly charge per
                channel which can be cancelled any time.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row w-full justify-between md:justify-center md:gap-10 items-center md:items-start">
            <div className=" md:w-[46%] ">
              <img
                src="https://www.didww.com/_next/static/media/blue-lines.7e5ee0b4.webp"
                alt=""
              />
            </div>
            <div className=" md:w-[46%] flex flex-col gap-2">
              <h1 className="text-3xl text-[#134391]">Pay-per-minute</h1>
              <p className="text-[#2b58a0]">
                Pay-per-minute channels provide a useful and cost-effective
                solution for customers with unpredictable volumes of
                simultaneous calls. Users can easily define the maximum number
                of simultaneous calls per single DID or group of DIDs, thereby
                controlling the incoming call load. There are no setup or
                monthly charges for pay-per-minute channels, instead, a low
                global per-minute rate applies.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row w-full justify-between md:justify-center md:gap-10 items-center md:items-start">
            <div className=" md:w-[46%] ">
              <img
                src="https://www.didww.com/_next/static/media/blue-lines.7e5ee0b4.webp"
                alt=""
              />
            </div>
            <div className=" md:w-[46%] flex flex-col gap-2">
              <h1 className="text-3xl text-[#134391]">Hybrid</h1>
              <p className="text-[#2b58a0]">
                Hybrid capacity incorporates both options, combining the
                benefits of including flat-rate channels for predictable volumes
                of simultaneous calls and pay-per-minute channels as a reliable
                backup for sudden high call demands. This unique voice Capacity
                mode ensures that no calls are missed and allows users to manage
                call volumes in a cost-efficient manner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mt-6 w-full  rounded-xl  p-8">
        
      </div>
    </div>
  );
}

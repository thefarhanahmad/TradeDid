import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center py-4 bg-[#023f7f]">
      <div className="w-[80%] text-white text-normal flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4">
        <div>Copyright © 2024 DIDWW Ireland Limited. All rights reserved.</div>
        <div className="flex gap-9">
          <img src="https://www.didww.com/images/footer/CFCA.svg" alt="img" />
          <img src="https://www.didww.com/images/footer/RIPE.svg" alt="img" />
          <img src="https://www.didww.com/images/footer/PTC.svg" alt="img" />
          <img src="https://www.didww.com/images/footer/GSMA.svg" alt="img" />
          <img src="https://www.didww.com/images/footer/ITU.svg" alt="img" />
          <img
            src="https://www.didww.com/images/footer/ISO-27001.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

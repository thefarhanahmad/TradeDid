import React from "react";

const ImageAnimation = () => {
  const images = [
    "https://www.didww.com/_next/static/media/86_contec@www.contec.be.7b24ddc2.jpg",
    "https://www.didww.com/_next/static/media/06_appboy-logo@www.appboy.com.d0fc3b5f.jpg",
    "https://www.didww.com/_next/static/media/55_starhub-logo@www.starhub.com.adb7fada.jpg",
    "https://www.didww.com/_next/static/media/41_magna5-logo@www.magna5global.com.62da0dee.jpg",
    "https://www.didww.com/_next/static/media/11_boat-around-logo@www.boataround.com.fd124f12.jpg",
    "https://www.didww.com/_next/static/media/91_premiumnumbers@premiumnumbers.es.ef6364ec.jpg",
    "https://www.didww.com/_next/static/media/37_jive-logo@jive.com.fd000b2e.jpg",
    "https://www.didww.com/_next/static/media/47_migesa-logo@www.migesa.com.mx.b1022052.png",
    "https://www.didww.com/_next/static/media/09_bbcom-logo@bbcom.com.d3b7fe68.jpg",
    "https://www.didww.com/_next/static/media/75_nectardesk@www.nectardesk.com.b138825c.jpg",
    "https://www.didww.com/_next/static/media/19_fastmetrics-logo@www.fastmetrics.com.b2f788c8.jpg",
    "https://www.didww.com/_next/static/media/35_inphonex-logo@www.inphonex.com.7569d185.jpg",
    "https://www.didww.com/_next/static/media/52_data-art-logo@www.dataart.com.49db4c6e.jpg",
    "https://www.didww.com/_next/static/media/68_crystel@www.crystel.co.0adbf794.jpg",
    "https://www.didww.com/_next/static/media/63_voxox@www.voxox.com.95b77d75.jpg",
    "https://www.didww.com/_next/static/media/34_inmarsat-logo@www.inmarsat.com.83fb83ef.jpg",
    "https://www.didww.com/_next/static/media/64_x-cast-lab-logo@xcastlabs.com.f503ae97.jpg",
  ];

  return (
    <div className=" py-16 flex flex-col gap-10">
      <header className="text-center w-11/12">
        <h1 className="text-2xl md:text-4xl font-bold text-[#023f7f]">
          Over <span className="text-orange-500 mx-2">1000</span> industry
          leaders rely on TRADEDID
        </h1>
      </header>
      <div className="overflow-hidden relative h-32">
        <div className="flex animate-slide">
          {/* Map over the images and display them */}
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className="w-52 h-full object-cover"
              alt={`img ${i + 1}`}
            />
          ))}
          {/* Duplicate images for continuous effect */}
          {images.map((image, i) => (
            <img
              key={`duplicate-${i}`}
              src={image}
              className="w-48 h-full object-cover"
              alt={`img ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageAnimation;

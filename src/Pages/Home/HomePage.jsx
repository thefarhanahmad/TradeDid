import React, { useState, useEffect } from "react";
import SecondSection from "../../Components/Home/SecondSection";
import TopSection from "../../Components/Home/TopSection";
import { Navbar } from "../../Components/Layouts/Navbar/Navbar";
import EnterpriseCommunication from "../../Components/Home/InterPriseSection";
import Services from "../../Components/Home/Services";
import Business from "../../Components/Home/Business";
import Testimonial from "../../Components/Home/Testimonials";
import PromoBanner from "../../Components/Home/LastSection";

const HomePage = () => {
  return (
    <div>
      <TopSection />

      <SecondSection />
      <EnterpriseCommunication />
      <Services />
      <Business />
      <Testimonial />
      <PromoBanner />
    </div>
  );
};

export default HomePage;

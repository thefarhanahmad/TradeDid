import React from "react";
import DescCard from "../../../Components/Dashboard/DescCard";

const EmergencyCallTrunks = () => {
  return (
    <div>
      <DescCard
        preText={
          "Emergency calling services are not activated for your account Please send us an email to"
        }
        spanText={"sales@didww.com"}
        nextText={"for further information."}
      />
    </div>
  );
};

export default EmergencyCallTrunks;

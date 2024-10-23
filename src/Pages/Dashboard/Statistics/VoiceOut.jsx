import React from "react";
import DescCard from "../../../Components/Dashboard/DescCard";

const VoiceOut = () => {
  return (
    <div>
      <DescCard
        preText={
          "Outbound services are not activated for your account. Please send us an email to"
        }
        spanText={"sales@didww.com"}
        nextText={"for further information."}
      />
    </div>
  );
};

export default VoiceOut;

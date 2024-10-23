import React from "react";
import DescCard from "../../../Components/Dashboard/DescCard";

const CallEventsAPI = () => {
  return (
    <div>
      <DescCard
        preText={
          "Call Events API is not activated for your account. Please send us an email to"
        }
        spanText={"support@didww.com"}
        nextText={"for further information"}
      />
    </div>
  );
};

export default CallEventsAPI;

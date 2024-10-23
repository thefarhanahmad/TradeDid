import React from "react";
import StatsFilter from "../../../Components/Dashboard/StatsData";
import FilterStats from "../../../Components/Dashboard/FilterStats";
import DescCard from "../../../Components/Dashboard/DescCard";

const ReportVoiceOut = () => {
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

export default ReportVoiceOut;

import React from "react";
import ReportCard from "./ReportCard";

const BillReports = () => {
  return (
    <div className="border border-cyan-300 rounded-md w-full  p-6 flex flex-col justify-between  gap-y-6">
      <div className="flex w-full justify-between flex-wrap">
        <ReportCard
          heading={"Last payments"}
          description={"No results to display"}
          width={"30%"}
        />
        <ReportCard
          heading={"Last orders"}
          description={"No results to display"}
          width={"30%"}
        />
        <ReportCard
          heading={"Last invoices"}
          description={"No results to display"}
          width={"30%"}
        />
      </div>

      <ReportCard
        heading={"Invoice breakdown by month"}
        description={"No results to display"}
        width={"100%"}
      />
      <ReportCard
        heading={"Balance history (1 month)"}
        description={"No results to display"}
        width={"100%"}
      />
    </div>
  );
};

export default BillReports;

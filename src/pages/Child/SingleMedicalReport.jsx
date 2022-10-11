import React from "react";
import MedicalReportTable from "./MedicalReportTable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const SingleMedicalReport = () => {
  return (
    <div
      class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl"
      style={{ marginTop: "150px", marginLeft: "100px" }}>
      <MedicalReportTable />
    </div>
  );
};

export default SingleMedicalReport;

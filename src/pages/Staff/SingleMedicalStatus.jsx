import React from "react";
import MedicalStatusTable from "./MedicalStatusTable";

const SingleMedicalStatus = ({ medicines }) => {
  return (
    <div
      class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl"
      style={{ marginTop: "150px", marginLeft: "100px" }}>
      <MedicalStatusTable medicines={medicines} />
    </div>
  );
};

export default SingleMedicalStatus;

import React from "react";
import AssignedKidsTable from "./AssignedKidsTable";

const SingleAssignedKids = ({ childs }) => {
  return (
    <div
      class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl"
      style={{ marginTop: "150px", marginLeft: "100px" }}>
      <AssignedKidsTable childs={childs} />
    </div>
  );
};

export default SingleAssignedKids;

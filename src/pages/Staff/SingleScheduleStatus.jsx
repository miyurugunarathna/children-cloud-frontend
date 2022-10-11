import React from "react";
import ScheduleStatusTable from "./ScheduleStatusTable";

const SingleScheduleStatus = ({ schedules }) => {
  return (
    <div
      class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl"
      style={{ marginTop: "150px", marginLeft: "100px" }}>
      <ScheduleStatusTable schedules={schedules} />
    </div>
  );
};

export default SingleScheduleStatus;

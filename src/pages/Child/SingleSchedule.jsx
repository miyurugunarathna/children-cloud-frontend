import React, { useState, useEffect } from "react";
import AddScheduleDetails from "../../components/model/schedule/AddScheduleDetails";
import ScheduleTable from "./ScheduleTable";

const SingleSchedule = ({ chi }) => {
  const [sid, setSid] = useState(null);
  return (
    <div class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl">
      <p>Child Name : {chi.name}</p>
      <br />
      <AddScheduleDetails chi={chi} sid={sid} setSid={setSid} />
      <ScheduleTable chi={chi} sid={sid} setSid={setSid} />
    </div>
  );
};

export default SingleSchedule;

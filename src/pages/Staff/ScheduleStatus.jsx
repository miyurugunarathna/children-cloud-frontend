import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import StaffSidebar from "../../components/StaffSidebar";
import SingleScheduleStatus from "./SingleScheduleStatus";
import scheduleRequest from "../../api/Schedule/schedule.request";

const ScheduleStatus = () => {
  const [schedules, setschedules] = useState([]);

  useEffect(() => {
    scheduleRequest.getScheduleForStaff().then((res) => {
      console.log(res.data);
      setschedules(res.data);
    });
  }, []);
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <StaffSidebar />

        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-6">
            <SingleScheduleStatus schedules={schedules} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleStatus;

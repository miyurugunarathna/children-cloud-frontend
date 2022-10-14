import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import AssignStaffModel from "../../components/model/child/AssignStaffModel";
import AssignStaffTable from "./AssignStaffTable";

const AssignStaff = () => {
  const dispatch = useDispatch();
  const [sfID, setSfID] = useState(null);
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <AssignStaffModel sfID={sfID} setSfID={setSfID} />
        <AssignStaffTable sfID={sfID} setSfID={setSfID} />
      </div>
    </div>
  );
};

export default AssignStaff;

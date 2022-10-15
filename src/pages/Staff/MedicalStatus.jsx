import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import StaffSidebar from "../../components/StaffSidebar";
import SingleMedicalStatus from "./SingleMedicalStatus";
import medicineRequest from "../../api/Medicine/medicine.request";

const MedicalStatus = () => {
  const [medicines, setmedicines] = useState([]);
  const [chID, setChID] = useState(null);

  useEffect(() => {
    medicineRequest.getMedicinesForStaff().then((res) => {
      console.log(res.data);
      setmedicines(res.data);
    });
  }, []);

  useEffect(() => {
    medicineRequest.getMedicinesForStaff().then((res) => {
      console.log(res.data);
      setmedicines(res.data);
      setChID(null);
    });
  }, [chID]);
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <StaffSidebar />
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-6">
            <SingleMedicalStatus
              medicines={medicines}
              chID={chID}
              setChID={setChID}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalStatus;

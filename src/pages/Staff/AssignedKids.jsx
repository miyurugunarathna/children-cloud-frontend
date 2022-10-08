import React from "react";
import Header from "../../components/Header";
import StaffSidebar from "../../components/StaffSidebar";

const AssignedKids = () => {
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <StaffSidebar />
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <h2>Assigned Kids</h2>
        </div>
      </div>
    </div>
  );
};

export default AssignedKids;

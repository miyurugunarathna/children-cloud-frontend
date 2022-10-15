import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import StaffSidebar from "../../components/StaffSidebar";
import SingleAssignedKids from "./SingleAssignedKids";
import childRequest from "../../api/child/child.request";

const AssignedKids = () => {
  const [childs, setchilds] = useState([]);

  useEffect(() => {
    childRequest.getAssignedKidsForStaff().then((res) => {
      console.log(res.data);
      setchilds(res.data);
    });
  }, []);
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <StaffSidebar />
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-6">
            <SingleAssignedKids childs={childs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedKids;

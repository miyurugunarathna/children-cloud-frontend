import React from "react";
import Header from "../../components/Header";
import DeleteAssignStaffModel from "../../components/model/child/DeleteAssignStaffModel";
import AddEvents from "../../components/model/Event/AddEvents";

const CreateEvents = () => {
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <AddEvents />
      </div>
    </div>
  );
};

export default CreateEvents;

import React from "react";
import DeleteEvent from "../../components/model/Event/DeleteEvent";
import EditEvent from "../../components/model/Event/EditEvent";

const SingleEvent = () => {
  return (
    <div
      class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl"
      style={{ marginLeft: "250px" }}>
      <div
        class="flex item-center justify-center"
        style={{ marginLeft: "1200px" }}>
        <EditEvent />
        <DeleteEvent />
      </div>
    </div>
  );
};

export default SingleEvent;

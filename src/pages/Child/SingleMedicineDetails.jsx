import React, { useState, useEffect } from "react";
import AddMedicineDetails from "../../components/model/medicine/AddMedicineDetails";
import MedicineTable from "./MedicineTable";

const SingleMedicineDetails = ({ chi }) => {
  const [id, setid] = useState(null);
  return (
    <div class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl">
      <p>Child Name : {chi.name}</p> <br />
      <AddMedicineDetails chi={chi} id={id} setid={setid} />
      <MedicineTable chi={chi} id={id} setid={setid} />
    </div>
  );
};

export default SingleMedicineDetails;

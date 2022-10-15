import React, { useState, useEffect } from "react";
import DeleteMedicine from "../../components/model/medicine/DeleteMedicine";
import EditMedicine from "../../components/model/medicine/EditMedicine";
import { useDispatch, useSelector } from "react-redux";
import medicineRequest from "../../api/Medicine/medicine.request";

const MedicineTable = ({ chi, id, setid }) => {
  const [medicines, setmedicines] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    medicineRequest.getMedicines(chi._id).then((res) => {
      console.log(res.data);
      setmedicines(res.data);
    });
  }, []);

  useEffect(() => {
    medicineRequest.getMedicines(chi._id).then((res) => {
      console.log(res.data);
      setmedicines(res.data);
      setid(null);
    });
  }, [id]);
  return (
    <div class="overflow-x-auto ml-10">
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">ChildID</th>
                <th class="py-3 px-6 text-left">ChildName</th>
                <th class="py-3 px-6 text-center">MedicineName</th>
                <th class="py-3 px-6 text-center">Morning</th>
                <th class="py-3 px-6 text-center">Evening</th>
                <th class="py-3 px-6 text-center">beforeAfterMeal</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              {!medicines.length ? (
                <div>
                  <div>
                    <h4>No Medical Details Added !</h4>
                    <p>No Medical Details Were Found.</p>
                  </div>
                </div>
              ) : (
                medicines.map((chi) => (
                  <tr
                    class="border-b border-gray-200 hover:bg-gray-100"
                    key={chi._id}>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.childID}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.childName}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.medicineName}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.morning}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.evening}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.beforAfterMeal}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 ">
                      <div class="flex item-center justify-center">
                        <EditMedicine chi={chi} id={id} setid={setid} />
                        <DeleteMedicine chi={chi} id={id} setid={setid} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicineTable;

import React, { useState, useEffect } from "react";
import medicineRequest from "../../api/Medicine/medicine.request";
import { getUserDetails } from "../../utils/helper";

const MedicalReportTable = () => {
  const [medicines, setmedicines] = useState([]);
  const [parentID, setparentID] = useState("");

  useEffect(() => {
    // medicineRequest.getMedicinesForParent().then((res) => {
    // console.log(res);
    //setmedicines(res.data);
    //});
    const getuser = async () => {
      const user = await getUserDetails();
      console.log(user);
      setparentID(user._id);
    };
    getuser();
  }, []);

  useEffect(() => {
    medicineRequest.getMedicinesForParent(parentID).then((res) => {
      console.log(res);
      setmedicines(res.data);
    });
  }, [parentID]);

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
                <th class="py-3 px-6 text-center">Status</th>
                <th class="py-3 px-6 text-center">date</th>
                <th class="py-3 px-6 text-center">description</th>
                <th class="py-3 px-6 text-center">staffID</th>
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
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">React Project</span>
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

export default MedicalReportTable;

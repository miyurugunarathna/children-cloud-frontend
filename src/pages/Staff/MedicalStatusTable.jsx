import React from "react";
import UpdateStatusModel from "../../components/model/medicine/UpdateStatusModel";

const MedicalStatusTable = ({ medicines }) => {
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
                <th class="py-3 px-6 text-center">BeforeAfterMeal</th>
                <th class="py-3 px-6 text-center">Date</th>
                <th class="py-3 px-6 text-center">Description</th>
                <th class="py-3 px-6 text-center">Status</th>
                <th class="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              {!medicines.length ? (
                <div>
                  <div>
                    <h4>No Schedule Details Added !</h4>
                    <p>No Schedule Details Were Found.</p>
                  </div>
                </div>
              ) : (
                medicines.map((chi) => (
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
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

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.date}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.description}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {chi.status}
                      </span>
                    </td>
                    <td class="py-3 px-6 ">
                      <div class="flex item-center justify-center">
                        <UpdateStatusModel chi={chi} />
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

export default MedicalStatusTable;

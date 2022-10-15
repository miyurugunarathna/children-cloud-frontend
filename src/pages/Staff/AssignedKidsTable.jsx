import React from "react";

const AssignedKidsTable = ({ childs }) => {
  return (
    <div class="overflow-x-auto ml-10">
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">childID</th>
                <th class="py-3 px-6 text-left">ChildName</th>
                <th class="py-3 px-6 text-center">Age</th>
                <th class="py-3 px-6 text-center">Status</th>
                <th class="py-3 px-6 text-center">Assigned Date</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              {!childs.length ? (
                <div>
                  <div>
                    <h4>No Schedule Details Added !</h4>
                    <p>No Schedule Details Were Found.</p>
                  </div>
                </div>
              ) : (
                childs.map((chi) => (
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
                        <span class="font-medium">{chi.name}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.age}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.updatedAt}</span>
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

export default AssignedKidsTable;

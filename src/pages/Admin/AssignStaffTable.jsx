import React from "react";
import DeleteAssignStaffModel from "../../components/model/child/DeleteAssignStaffModel";
import UpdateAssignStaffModel from "../../components/model/child/UpdateAssignStaffModel";

const AssignStaffTable = () => {
  return (
    <div class="overflow-x-auto" style={{ marginLeft: "300px" }}>
      <div class="w-full lg:w-4/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">Project</th>
                <th class="py-3 px-6 text-left">Client</th>
                <th class="py-3 px-6 text-center">Users</th>
                <th class="py-3 px-6 text-center">Status</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="mr-2"></div>
                    <span class="font-medium">React Project</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <div class="mr-2">
                      <img
                        class="w-6 h-6 rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <img
                      class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                    <img
                      class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                    />

                    <img
                      class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                    />
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    Active
                  </span>
                </td>
                <td class="py-3 px-6 ">
                  <div class="flex item-center justify-center">
                    <UpdateAssignStaffModel />
                    <DeleteAssignStaffModel />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignStaffTable;

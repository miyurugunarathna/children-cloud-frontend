import React, { useState, useEffect } from "react";
import DeleteAssignStaffModel from "../../components/model/child/DeleteAssignStaffModel";
import UpdateAssignStaffModel from "../../components/model/child/UpdateAssignStaffModel";
import childRequest from "../../api/Child/child.request";

const AssignStaffTable = ({ sfID, setSfID }) => {
  const [assignedStaffs, setStaffs] = useState([]);

  useEffect(() => {
    childRequest.getAllAssignStaffforChild().then((res) => {
      console.log(res.data);
      setStaffs(res.data);
    });
  }, []);

  useEffect(() => {
    childRequest.getAllAssignStaffforChild().then((res) => {
      console.log(res.data);
      setStaffs(res.data);
      setSfID(null);
    });
  }, [sfID]);

  return (
    <div class="overflow-x-auto" style={{ marginLeft: "300px" }}>
      <div class="w-full lg:w-4/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">ChildID</th>
                <th class="py-3 px-6 text-left">ChildName</th>
                <th class="py-3 px-6 text-center">Age</th>
                <th class="py-3 px-6 text-center">StaffID</th>
                <th class="py-3 px-6 text-center">Status</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              {!assignedStaffs.length ? (
                <div>
                  <div>
                    <h4>No Staff was Assigned to Childs !!!</h4>
                    <p>No Staff was Assigned.</p>
                  </div>
                </div>
              ) : (
                assignedStaffs.map((chi) => (
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
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.staff}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {chi.status}
                      </span>
                    </td>
                    <td class="py-3 px-6 ">
                      <div class="flex item-center justify-center">
                        <UpdateAssignStaffModel
                          chi={chi}
                          sfID={sfID}
                          setSfID={setSfID}
                        />
                        <DeleteAssignStaffModel
                          chi={chi}
                          sfID={sfID}
                          setSfID={setSfID}
                        />
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

export default AssignStaffTable;

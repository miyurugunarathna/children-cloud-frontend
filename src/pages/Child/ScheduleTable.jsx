import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import scheduleRequest from "../../api/Schedule/schedule.request";
import DeleteSchedule from "../../components/model/schedule/DeleteSchedule";
import UpdateSchedule from "../../components/model/schedule/UpdateSchedule";

const ScheduleTable = ({ chi, sid, setSid }) => {
  const [schedules, setschedules] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    scheduleRequest.getSchedules(chi._id).then((res) => {
      console.log(res.data);
      setschedules(res.data);
    });
  }, []);

  useEffect(() => {
    scheduleRequest.getSchedules(chi._id).then((res) => {
      console.log(res.data);
      setschedules(res.data);
      setSid(null);
    });
  }, [sid]);
  return (
    <div class="overflow-x-auto ml-10">
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">ChildID</th>
                <th class="py-3 px-6 text-left">ChildName</th>
                <th class="py-3 px-6 text-center">TeachersName</th>
                <th class="py-3 px-6 text-center">Subject</th>
                <th class="py-3 px-6 text-center">Address</th>
                <th class="py-3 px-6 text-center">Day</th>
                <th class="py-3 px-6 text-center">StartingTime</th>
                <th class="py-3 px-6 text-center">EndingTime</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              {!schedules.length ? (
                <div>
                  <div>
                    <h4>No Schedule Details Added !</h4>
                    <p>No Schedule Details Were Found.</p>
                  </div>
                </div>
              ) : (
                schedules.map((chi) => (
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
                        <span class="font-medium">{chi.teacherName}</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.subject}</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.address}</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.day}</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.startingTime}</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{chi.endingTime}</span>
                      </div>
                    </td>

                    <td class="py-3 px-6 ">
                      <div class="flex item-center justify-center">
                        <UpdateSchedule chi={chi} sid={sid} setSid={setSid} />
                        <DeleteSchedule chi={chi} sid={sid} setSid={setSid} />
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

export default ScheduleTable;

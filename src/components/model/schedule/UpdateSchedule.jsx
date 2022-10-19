import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import scheduleRequest from "../../../api/Schedule/schedule.request";
import Swal from "sweetalert2";

const UpdateSchedule = ({ chi, sid, setSid }) => {
  const [showModal, setShowModal] = React.useState(false);

  const [subject, setsubject] = useState("");
  const [address, setaddress] = useState("");
  const [startingTime, setstartingTime] = useState("");
  const [endingTime, setendingTime] = useState("");
  const [day, setday] = useState("");
  const [teacherName, setteacherName] = useState("");

  useEffect(() => {
    if ({ chi }) {
      setsubject(chi.subject);
      setaddress(chi.address);
      setstartingTime(chi.startingTime);
      setendingTime(chi.endingTime);
      setday(chi.day);
      setteacherName(chi.teacherName);
    }
  }, [chi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    scheduleRequest
      .updateSchedule(
        {
          subject,
          address,
          startingTime,
          endingTime,
          day,
          teacherName,
        },
        chi._id,
      )
      .then((res) => {
        console.log(res);
        setSid("idSet");
        Swal.fire(
          `schedule Updated Successfully!`,
          "Click Ok to continue",
          "success",
        );
      })
      .catch((err) => {
        Swal.fire("Error!", "Some thing went wrong", "error");
      });

    clear();
    setShowModal(false);
  };
  const clear = () => {
    //style={{marginLeft: "1400px" , marginBottom: "10px"}}
  };
  return (
    <>
      <div
        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Schedule Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div class="flex items-center justify-center p-12">
                  <div class="w-full px-3 " style={{ width: "500px" }}>
                    <form onSubmit={handleSubmit}>
                      <div
                        class="w-full px-3 "
                        style={{ width: "500px" }}></div>
                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Teachers Name
                          </label>
                          <input
                            type="text"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={teacherName}
                            onChange={(e) => setteacherName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Subject Name
                          </label>
                          <input
                            type="text"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={subject}
                            onChange={(e) => setsubject(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label
                          for="guest"
                          class="mb-3 block text-base font-medium text-[#07074D]">
                          Tution Scheduled Day
                        </label>
                        <select
                          id="countries"
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setday(e.target.value)}
                          required>
                          <option value="Select">Select </option>
                          <option value="MonDay">MonDay</option>
                          <option value="TuesDay">TuesDay</option>
                          <option value="WednesDay">WednesDay</option>
                          <option value="ThursDay">ThursDay</option>
                          <option value="FriDay">FriDay</option>
                          <option value="SaturDay">SaturDay</option>
                          <option value="SunDay">SunDay</option>
                        </select>
                      </div>

                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Start Time
                          </label>
                          <input
                            type="time"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={startingTime}
                            onChange={(e) => setstartingTime(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            End Time
                          </label>
                          <input
                            type="time"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={endingTime}
                            onChange={(e) => setendingTime(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Address
                          </label>
                          <input
                            type="text"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={address}
                            onChange={(e) => setaddress(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          type="submit"
                          disabled={
                            !teacherName ||
                            !subject ||
                            !address ||
                            !startingTime ||
                            !endingTime ||
                            !day
                          }>
                          Submit
                        </button>

                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none ml-2"
                          onClick={() => setShowModal(false)}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default UpdateSchedule;

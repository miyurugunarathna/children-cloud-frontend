import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import medicineRequest from "../../../api/Medicine/medicine.request";

const EditMedicine = ({ chi }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [medicineName, setmedicineName] = useState("");
  const [morning, setmorning] = useState("");
  const [evening, setevening] = useState("");
  const [beforAfterMeal, setmeal] = useState("");

  useEffect(() => {
    if ({ chi }) {
      setmedicineName(chi.medicineName);
      setmorning(chi.morning);
      setevening(chi.evening);
      setmeal(chi.beforAfterMeal);
    }
  }, [chi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    medicineRequest
      .updateMedicine(
        {
          medicineName,
          morning,
          evening,
          beforAfterMeal,
        },
        chi._id,
      )
      .then((res) => {
        console.log(res);
        alert("Event Added Successfull !!");
      })
      .catch((err) => {
        alert("something whent wrong!!!");
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
                    Update Medicine Details
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
                      <div class="w-full">
                        <div class="mb-5">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Medicine Name
                          </label>
                          <input
                            type="text"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={medicineName}
                            onChange={(e) => setmedicineName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="mb-5">
                        <label
                          for="guest"
                          class="mb-3 block text-base font-medium text-[#07074D]">
                          Morning
                        </label>
                        <select
                          id="countries"
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setmorning(e.target.value)}>
                          <option value="Select">Select </option>
                          <option value="1 table spoon">1 table spoon</option>
                          <option value="2 table spoon">2 table spoon</option>
                          <option value="1 tablet">1 tablet</option>
                          <option value="2 tablet">2 tablet</option>
                          <option value="none">none</option>
                        </select>
                      </div>

                      <div class="mb-5">
                        <label
                          for="guest"
                          class="mb-3 block text-base font-medium text-[#07074D]">
                          Evening
                        </label>
                        <select
                          id="countries"
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setevening(e.target.value)}>
                          <option value="Select">Select </option>
                          <option value="1 table spoon">1 table spoon</option>
                          <option value="2 table spoon">2 table spoon</option>
                          <option value="1 tablet">1 tablet</option>
                          <option value="2 tablet">2 tablet</option>
                          <option value="none">none</option>
                        </select>
                      </div>

                      <div class="mb-5">
                        <label
                          for="guest"
                          class="mb-3 block text-base font-medium text-[#07074D]">
                          Before/After Meal
                        </label>
                        <select
                          id="countries"
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setmeal(e.target.value)}>
                          <option value="Select">Select </option>
                          <option value="Before">Before</option>
                          <option value="After">After</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          type="submit">
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

export default EditMedicine;

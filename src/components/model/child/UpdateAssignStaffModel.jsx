import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";

const UpdateAssignStaffModel = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [img, setimg] = useState("");
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
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
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
                  <div class="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                      <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 " style={{ width: "500px" }}>
                          <div class="mb-1">
                            <label
                              for="fName"
                              class="mb-3 block text-base font-medium text-[#07074D]">
                              Name
                            </label>
                            <input
                              type="text"
                              name="fName"
                              id="fName"
                              placeholder="First Name"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-1">
                        <label
                          for="guest"
                          class="mb-3 block text-base font-medium text-[#07074D]">
                          Gender
                        </label>
                        <select
                          id="countries"
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Choose a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="date"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="school"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            School
                          </label>
                          <input
                            type="text"
                            name="school"
                            id="school"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Hobby
                          </label>
                          <input
                            type="text"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="hobby"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Image
                          </label>
                          <br />
                          <FileBase
                            type="file"
                            id="img"
                            multiple={false}
                            onDone={({ base64 }) => setimg(base64)}
                          />
                          <br />
                        </div>
                      </div>

                      <div className="flex">
                        <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
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

export default UpdateAssignStaffModel;

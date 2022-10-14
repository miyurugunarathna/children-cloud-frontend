import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import childRequest from "../../../api/Child/child.request";
import Swal from "sweetalert2";

const UpdateAssignStaffModel = ({ chi, sfID, setSfID }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [childs, setchilds] = useState([]);
  const [staffs, setstaffs] = useState([]);
  const [childID, setchildID] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [staff, setstaff] = useState("");
  const [status, setstatus] = useState("");

  useEffect(() => {
    childRequest.getAllChilds().then((res) => {
      console.log(res.data);
      setchilds(res.data);
    });
  }, []);

  useEffect(() => {
    if ({ chi }) {
      setchildID(chi.childID);
      setstaff(chi.staff);
      setstatus(chi.status);
    }
  }, [chi]);

  useEffect(() => {
    childRequest.getAllStaffs().then((res) => {
      console.log(res.data);
      setstaffs(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    childRequest
      .updateAssignedStaff({ staff, status }, chi._id)
      .then((res) => {
        console.log(res);
        setSfID("idADD");
        Swal.fire(
          `Staff Assign Updated Successfully!`,
          "Click Ok to continue",
          "success",
        );
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
                    Update Assign Staff
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
                  <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit}>
                      <div class="w-full px-3 " style={{ width: "500px" }}>
                        <div class="mb-1">
                          <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Child ID
                          </label>
                          <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            {childID}
                          </label>
                        </div>

                        <div class="mb-1">
                          <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Staff ID
                          </label>
                          <select
                            id="countries"
                            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setstaff(e.target.value)}>
                            <option selected>Select Staff ID</option>
                            {!staffs.length ? (
                              <option value="none">
                                No Staff ID's Available
                              </option>
                            ) : (
                              staffs.map((staff) => (
                                <option value={staff._id} key={staff._id}>
                                  {staff._id}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                        <div class="mb-5">
                          <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Status
                          </label>
                          <select
                            id="countries"
                            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setstatus(e.target.value)}>
                            <option selected>Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Done">Done</option>
                            <option value="Failed">Failed</option>
                          </select>
                        </div>
                      </div>

                      <br />

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

export default UpdateAssignStaffModel;

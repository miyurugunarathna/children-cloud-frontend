import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import childRequest from "../../../api/Child/child.request";
import Swal from "sweetalert2";

const AssignStaffModel = ({ sfID, setSfID }) => {
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
    if (childID) {
      childRequest.getSingleChild(childID).then((res) => {
        console.log(res.data);
        setname(res.data.name);
        setage(res.data.age);
        setstatus("Done");
      });
    }
  }, [childID]);

  useEffect(() => {
    childRequest.getAllStaffs().then((res) => {
      console.log(res.data);
      setstaffs(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    childRequest
      .AssignStaffforChild({
        childID,
        name,
        age,
        staff,
        status,
      })
      .then((res) => {
        console.log(res);
        setSfID("idADD");
        Swal.fire(
          `Staff Assigned Successfully!`,
          "Click Ok to continue",
          "success",
        );
      })
      .catch((err) => {
        Swal.fire("Error!", "Some thing Went Wrong", "error");
      });

    clear();
    setShowModal(false);
  };
  const clear = () => {
    //style={{marginLeft: "1400px" , marginBottom: "10px"}}
  };

  return (
    <>
      <button
        className=" text-black  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[20rem]"
        type="button"
        onClick={() => setShowModal(true)}
        style={{ marginLeft: "1055px", marginTop: "200px" }}>
        Assign Staff
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Assign Staff</h3>
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
                          <select
                            id="countries"
                            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setchildID(e.target.value)}>
                            <option selected>Select Child ID</option>
                            {!childs.length ? (
                              <option value="none">
                                No Child ID's Available
                              </option>
                            ) : (
                              childs.map((chi) => (
                                <option value={chi._id} key={chi._id}>
                                  {chi._id}
                                </option>
                              ))
                            )}
                          </select>
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

export default AssignStaffModel;

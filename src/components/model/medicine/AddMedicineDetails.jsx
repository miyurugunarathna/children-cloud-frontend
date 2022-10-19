import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import medicineRequest from "../../../api/Medicine/medicine.request";
import Swal from "sweetalert2";

const AddMedicineDetails = ({ chi, id, setid }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);

  const [medicineName, setmedicineName] = useState("");
  const [morning, setmorning] = useState("");
  const [evening, setevening] = useState("");
  const [beforAfterMeal, setmeal] = useState("");
  const [childName, setchildName] = useState("");
  const [childID, setchildID] = useState("");

  useEffect(() => {
    if (chi) {
      setchildID(chi._id);
      setchildName(chi.name);
    }
  }, [chi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    medicineRequest
      .saveMedicine({
        childID,
        childName,
        medicineName,
        morning,
        evening,
        beforAfterMeal,
      })
      .then((res) => {
        console.log(res.data);
        setid("idSet");
        Swal.fire(
          `Medical Details Added Successfully!`,
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

  //max-w-3xl  max-w-[200rem]
  return (
    <>
      <button
        className=" text-black  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[20rem]"
        type="button"
        onClick={() => setShowModal(true)}
        style={{ marginLeft: "850px" }}>
        Add Medicine
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-5  min-w-500 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t min-w-500">
                  <h3 className="text-3xl font-semibold">
                    Add Medicine Details
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
                            required
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
                          onChange={(e) => setmorning(e.target.value)}
                          required>
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
                          onChange={(e) => setevening(e.target.value)}
                          required>
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
                          onChange={(e) => setmeal(e.target.value)}
                          required>
                          <option value="Select">Select </option>
                          <option value="Before">Before</option>
                          <option value="After">After</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          type="submit"
                          disabled={
                            !medicineName ||
                            !morning ||
                            !evening ||
                            !beforAfterMeal
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
        </>
      ) : null}
    </>
  );
};

export default AddMedicineDetails;

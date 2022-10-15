import React, { useState, useEffect } from "react";
import medicineRequest from "../../api/Medicine/medicine.request";
import { getUserDetails } from "../../utils/helper";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const MedicalReportTable = () => {
  const [medicines, setmedicines] = useState([]);
  const [parentID, setparentID] = useState("");
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    // medicineRequest.getMedicinesForParent().then((res) => {
    // console.log(res);
    //setmedicines(res.data);
    //});
    const getuser = async () => {
      const user = await getUserDetails();
      console.log(user);
      setparentID(user._id);
    };
    getuser();
  }, []);

  useEffect(() => {
    medicineRequest.getMedicinesForParent(parentID).then((res) => {
      console.log(res);
      setmedicines(res.data);
    });
  }, [parentID]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    const newFilter = medicines.filter((res) => {
      return (
        res.childID.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.medicineName.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.childName.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.status.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.date.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.staffID.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      console.log("EMPLTY");
      if (parentID) {
        medicineRequest.getMedicinesForParent(parentID).then((res) => {
          console.log(res);
          setmedicines(res.data);
        });
      }
    } else {
      setmedicines(newFilter);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="col" style={{ width: "70%", marginLeft: "36px" }}>
          <ReactHTMLTableToExcel
            className="btn btn-outline-success"
            table="table"
            filename="MedicineReport Excel"
            sheet="Sheet"
            buttonText="Download Excel Sheet"
          />
        </div>
        <div style={{ marginRight: "236px" }}>
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={wordEntered}
                onChange={handleFilter}
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>

      <div class="overflow-x-auto ml-10">
        <div class="w-full lg:w-5/6">
          <div class="bg-white shadow-md rounded my-6">
            <table
              className="min-w-max w-full table-auto"
              id="table"
              class="table">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">ChildID</th>
                  <th class="py-3 px-6 text-left">ChildName</th>
                  <th class="py-3 px-6 text-center">MedicineName</th>
                  <th class="py-3 px-6 text-center">Status</th>
                  <th class="py-3 px-6 text-center">date</th>
                  <th class="py-3 px-6 text-center">description</th>
                  <th class="py-3 px-6 text-center">staffID</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {!medicines.length ? (
                  <div>
                    <div>
                      <h4>No Medical Details Added !</h4>
                      <p>No Medical Details Were Found.</p>
                    </div>
                  </div>
                ) : (
                  medicines.map((chi) => (
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
                          <span class="font-medium">{chi.childName}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="mr-2"></div>
                          <span class="font-medium">{chi.medicineName}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="mr-2"></div>
                          <span class="font-medium">{chi.status}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="mr-2"></div>
                          <span class="font-medium">{chi.date}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="mr-2"></div>
                          <span class="font-medium">{chi.description}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="mr-2"></div>
                          <span class="font-medium">{chi.staffID}</span>
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
    </div>
  );
};

export default MedicalReportTable;

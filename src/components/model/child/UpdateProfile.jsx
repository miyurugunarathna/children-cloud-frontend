import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import childRequest from "../../../api/Child/child.request";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const UpdateProfile = ({ chi }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);

  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [gender, setgender] = useState("");
  const [dateOfBirth, setdob] = useState("");
  const [image, setimage] = useState("");
  const [school, setschool] = useState("");
  const [hobby, sethobby] = useState("");

  useEffect(() => {
    if ({ chi }) {
      setname(chi.name);
      setage(chi.age);
      setgender(chi.gender);
      setdob(chi.dateOfBirth);
      setimage(chi.image);
      setschool(chi.school);
      sethobby(chi.hobby);
    }
  }, [chi]);

  const handleSubmit = (e) => {
    e.preventDefault();

    childRequest
      .updateChild(
        { name, age, gender, dateOfBirth, image, school, hobby },
        chi._id,
      )
      .then((res) => {
        console.log(res);
        //alert("Event Added Successfull !!");
        Swal.fire(`Bill Added!`, "Click Ok to continue", "success");
      });

    clear();
    setShowModal(false);
  };
  const clear = () => {
    //style={{marginLeft: "1400px" , marginBottom: "10px"}}
  };
  //max-w-3xl
  return (
    <>
      <button
        className=" text-black  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[20rem]"
        type="button"
        onClick={() => setShowModal(true)}>
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-5 mx-auto max-w-[90rem]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update Profile</h3>
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
                      <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
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
                              value={name}
                              onChange={(e) => setname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-1">
                            <label
                              for="lName"
                              class="mb-3 block text-base font-medium text-[#07074D]">
                              Age
                            </label>
                            <input
                              type="number"
                              name="lName"
                              id="lName"
                              placeholder="Last Name"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              value={age}
                              onChange={(e) => setage(e.target.value)}
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
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setgender(e.target.value)}>
                          <option value="Select Gender">select a Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="date"
                            class="mb-3 block text-base font-medium text-[#07074D]">
                            Date Of Birth
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={dateOfBirth}
                            onChange={(e) => setdob(e.target.value)}
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
                            value={school}
                            onChange={(e) => setschool(e.target.value)}
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
                            value={hobby}
                            onChange={(e) => sethobby(e.target.value)}
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
                            onDone={({ base64 }) => setimage(base64)}
                          />
                          <br />
                        </div>
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

export default UpdateProfile;

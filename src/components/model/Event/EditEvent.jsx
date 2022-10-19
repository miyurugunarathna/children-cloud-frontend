import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import eventRequest from "../../../api/Event/event.request";
import Swal from "sweetalert2";

const EditEvent = ({ eve, evid, setEvID }) => {
  const [showModal, setShowModal] = React.useState(false);
  //title, description, date, startTime, endTime, tag, image

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [tag, settag] = useState("");
  const [image, setimg] = useState("");

  useEffect(() => {
    if ({ eve }) {
      settitle(eve.title);
      setdescription(eve.description);
      setDate(eve.date);
      setStart(eve.startTime);
      setEnd(eve.endTime);
      settag(eve.tag);
      setimg(eve.image);
    }
  }, [eve]);

  const handleSubmit = (e) => {
    e.preventDefault();

    eventRequest
      .updateEvent(
        { title, description, date, startTime, endTime, tag, image },
        eve._id,
      )
      .then((res) => {
        console.log(res);
        setEvID("idADD");
        Swal.fire(
          `Event Updated Successfully!`,
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
    // settitle("");
    //setdescription("");
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
                  <h3 className="text-3xl font-semibold">Update Event</h3>
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
                        <div class="w-full px-3 " style={{ width: "500px" }}>
                          <div class="mb-1">
                            <label
                              for="fName"
                              class="mb-1 block text-base font-medium text-[#07074D]">
                              Title
                            </label>
                            <input
                              type="text"
                              name="fName"
                              id="fName"
                              placeholder="First Name"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              value={title}
                              onChange={(e) => settitle(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-1">
                        <label
                          for="fName"
                          class="mb-1 block text-base font-medium text-[#07074D]">
                          Description
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value={description}
                          onChange={(e) => setdescription(e.target.value)}
                          required
                        />
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="date"
                            class="mb-1 block text-base font-medium text-[#07074D]">
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-1 block text-base font-medium text-[#07074D]">
                            Start Time
                          </label>
                          <input
                            type="time"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={startTime}
                            onChange={(e) => setStart(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-3">
                          <label
                            for="hobby"
                            class="mb-1 block text-base font-medium text-[#07074D]">
                            End Time
                          </label>
                          <input
                            type="time"
                            name="hobby"
                            id="hobby"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={endTime}
                            onChange={(e) => setEnd(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div class="mb-1">
                        <label
                          for="fName"
                          class="mb-1 block text-base font-medium text-[#07074D]">
                          Tag
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value={tag}
                          onChange={(e) => settag(e.target.value)}
                          required
                        />
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="hobby"
                            class="mb-1 block text-base font-medium text-[#07074D]">
                            Image
                          </label>
                          <br />
                          <FileBase
                            type="file"
                            id="img"
                            multiple={false}
                            onDone={({ base64 }) => setimg(base64)}
                            required
                          />
                          <br />
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          type="submit"
                          disabled={
                            !title ||
                            !date ||
                            !description ||
                            !startTime ||
                            !endTime ||
                            !tag ||
                            !image
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

export default EditEvent;

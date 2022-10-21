import { useState, useEffect } from "react";
import Header from "../components/Header";
import userRequest from "../api/User/user.request";
import { Modal } from "../components";
import { SUCCESS } from "../constants";
import Swal from "sweetalert2";

export const Parents = () => {
  const [showModal, setShowModal] = useState(false);
  const [parents, setParents] = useState([]);
  const [selected, setSelected] = useState(null);

  const toggleModal = (id) => {
    console.log(id);
    setSelected(parents.find((p) => p._id === id));
  };

  useEffect(() => {
    if (selected) setShowModal(true);
    else setShowModal(false);
  }, [selected]);

  const fetch = async () => {
    const res = await userRequest.getAllUsers();
    if (res?.status === SUCCESS && res?.data) {
      setParents(
        res.data.filter((p) => String(p.role).toLowerCase() === "parent"),
      );
    }
  };

  useEffect(() => {
    let count = 1;
    if (count === 1) fetch();
    count++;
  }, []);

  const onDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this account?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        userRequest
          .deleteUser(id)
          .then((res) => {
            if (res?.status === SUCCESS) {
              fetch();
              Swal.fire("Deleted!", "", "success");
            } else {
              Swal.fire("Oops...", "Something went wrong!", "error");
            }
          })
          .catch(() => Swal.fire("Oops...", "Something went wrong!", "error"));
      }
    });
  };

  return (
    <>
      <Modal
        isVisible={showModal}
        toggle={toggleModal}
        onUpdate={() => fetch()}
        data={selected}
      />
      <Header />
      <div className="flex flex-col max-w-4xl mx-auto items-center">
        <div className="my-4">
          <h1 className="text-4xl">Parents</h1>
        </div>
        <div className="flex flex-col gap-3 mb-36">
          {parents.map((parent, key) => (
            <div
              key={key}
              className="border border-black/20 max-w-4xl w-[600px] rounded flex flex-row justify-center gap-4 items-center p-4">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 outline-dashed outline-black/40 outline-1 outline-offset-8">
                {parent?.url ? (
                  <img
                    className="rounded-full w-24 h-24 object-cover"
                    src={parent.url}
                    alt="M"
                  />
                ) : (
                  <span className="text-3xl text-slate-300 font-semibold">
                    {parent.firstName?.charAt(0)}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-center grow">
                <h4 className="m-0">{`${parent.firstName} ${parent.lastName}`}</h4>
                <p className="m-0">{parent.email}</p>
                <p className="m-0">{parent.mobile}</p>
              </div>
              <div className="flex flex-row gap-3">
                <button
                  onClick={toggleModal.bind(this, parent._id)}
                  className="border-[1px] border-black/40 mt-3 py-0 px-3 rounded-sm"
                  type="button">
                  Edit
                </button>
                <button
                  onClick={onDelete.bind(this, parent._id)}
                  className="border-[1px] bg-black text-white mt-3 py-0 px-3 rounded-sm"
                  type="button">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

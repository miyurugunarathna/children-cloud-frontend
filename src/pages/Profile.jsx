import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Modal } from "../components";

export const Profile = () => {
  const user = useSelector((state) => state.user?.user);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Modal isVisible={showModal} toggle={toggleModal} />
      <Header />
      <div className="flex flex-col max-w-4xl mx-auto items-center">
        <div className="my-4">
          <h1 className="text-4xl">Profile</h1>
        </div>
        <div className="border border-black/20 min-h-[400px] max-w-lg w-full rounded flex flex-col justify-between gap-16 items-center p-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 outline-dashed outline-black/40 outline-1 outline-offset-8 mb-3">
              {user?.url ? (
                <img
                  className="rounded-full object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/the-children-cloud.appspot.com/o/276158220_689752729112571_8919827001946299820_n.jpg?alt=media&token=4b6b54ae-5761-4949-bc10-5a97c3671112"
                  alt="M"
                />
              ) : (
                <span className="text-3xl text-slate-300 font-semibold">
                  {user.firstName?.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl">{`${user.firstName} ${user.lastName}`}</h3>
              <a
                href={`mailto:${user.email}`}
                className="text-slate-400 no-underline">
                {user.email}
              </a>
              {user?.mobile && (
                <a
                  href={`tel:${user.mobile}`}
                  className="text-slate-400 no-underline">
                  {user.mobile}
                </a>
              )}
              {user?.address && (
                <p className="text-slate-400">{user.address}</p>
              )}
              <button
                onClick={toggleModal}
                className="border-[1px] border-black/40 mt-3 py-1 px-3 rounded-sm"
                type="button">
                Edit
              </button>
            </div>
          </div>
          <button className="font-semibold">Change password</button>
        </div>
      </div>
    </>
  );
};

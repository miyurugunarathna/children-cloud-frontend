import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import userRequest from "../api/User/user.request";
import useFetchUserProfile from "../hooks/useFetchUserProfile";

import Cover from "../assets/images/cover.jpg";
import { SUCCESS, ROLE_PARENT } from "../constants";

export const Register = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => state.user);

  useFetchUserProfile();

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/list");
    }
  }, [state.isLoggedIn]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await userRequest.addUser({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      userName: e.target.userName.value,
      password: e.target.password.value,
      role: ROLE_PARENT,
    });
    if (res?.status === SUCCESS) {
      Swal.fire({
        title: "Registration success!",
        text: "Click okay to login.",
        confirmButtonText: "Okay",
        showDenyButton: true,
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) navigate("/");
      });
    } else {
      Swal.fire(
        "Registration failed!",
        "Something went wrong. Please try again.",
        "error",
      );
    }
  };

  const inputs = [
    {
      type: "text",
      id: "firstName",
      name: "firstName",
      required: true,
      placeholder: "First name",
    },
    {
      type: "text",
      id: "lastName",
      name: "lastName",
      required: true,
      placeholder: "Last name",
    },
    {
      type: "email",
      id: "email",
      name: "email",
      required: true,
      placeholder: "Email",
    },
    {
      type: "text",
      id: "userName",
      name: "userName",
      required: true,
      placeholder: "Username",
    },
    {
      type: "password",
      id: "password",
      name: "password",
      required: true,
      placeholder: "Password",
    },
  ];

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full"
              src={Cover}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <form className="w-full" onSubmit={handleRegister}>
              <h1 className="mb-6 text-2xl text-center tracking-tight font-bold text-black">
                <span className="font-normal">Welcome to</span>
                <br />
                The Children Cloud
              </h1>
              <hr className="opacity-10 mb-4" />
              {inputs.map((i, key) => (
                <input
                  key={key}
                  className="mt-3 w-full border rounded py-2 px-3"
                  type={i.type}
                  id={i.id}
                  name={i.name}
                  required={i.required}
                  placeholder={i.placeholder}
                />
              ))}

              <button className="mt-8 py-2 rounded text-white btn btn-active btn-primary w-full bg-black">
                Register
              </button>

              <p className="mt-4 text-center text-sm">
                Already have an account?
                {` `}
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline"
                  to="/">
                  Login
                </Link>
              </p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

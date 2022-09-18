import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../store/User";
import { Link } from "react-router-dom";
import Cover from "../assets/images/cover.jpg";

export const Register = () => {
  // eslint-disable-next-line
  let navigate = useNavigate();
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/");
    }
  }, [state.isLoggedIn]);

  useEffect(() => {
    if (state.isLoggedIn && !state.error) {
      toast.success("Login Successful!");
    }
    if (!state.isLoggedIn && state.error) {
      toast.error("Login failed!");
    }
  }, [state.isLoggedIn, state.error]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        userName: e.target.userName.value,
        password: e.target.password.value,
      }),
    );
    toast.success("Login Successful!");
  };

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
            <form className="w-full" onSubmit={handleLogin}>
              <h1 className="mb-6 text-2xl text-center tracking-tight font-bold text-black">
                <span className="font-normal">Welcome to</span>
                <br />
                The Children Cloud
              </h1>
              <hr className="opacity-10 mb-4" />
              <input
                className="mt-1 w-full border rounded py-2 px-3"
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="First name"
              />
              <input
                className="mt-3 w-full border rounded py-2 px-3"
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Last name"
              />
              <input
                className="mt-3 w-full border rounded py-2 px-3"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
              <input
                className="mt-3 w-full border rounded py-2 px-3"
                type="text"
                id="userName"
                name="userName"
                required
                placeholder="Username"
              />
              <input
                className="mt-3 w-full border rounded py-2 px-3"
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              />

              <button className="mt-8 py-2 rounded text-white btn btn-active btn-primary w-full bg-black">
                Register
              </button>

              <p className="mt-4 text-center text-sm">
                Already have an account?
                {` `}
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline"
                  to="/login">
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

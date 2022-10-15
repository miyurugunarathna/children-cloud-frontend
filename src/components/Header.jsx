import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiCategory } from "react-icons/bi";

import userRequest from "../api/User/user.request";
import useFetchUserProfile from "../hooks/useFetchUserProfile";
import { ROLE_PARENT, ROLE_ADMIN } from "../constants";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [mobNavHeight, setMobNavHeight] = useState(1000);
  const mobNav = useRef(null);
  const role = useSelector((state) => state.user?.user?.role);

  useFetchUserProfile();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const navs = [
    {
      name: "Kids",
      url: "/kids",
      role: [ROLE_ADMIN],
    },
    {
      name: "Parents",
      url: "/parents",
      role: [ROLE_ADMIN],
    },
    {
      name: "Employees",
      url: "/employees",
      role: [ROLE_ADMIN],
    },
    {
      name: "Profile",
      url: "/me",
      role: [ROLE_PARENT],
    },
    {
      name: "My Kidos",
      url: "/kidos",
      role: [ROLE_PARENT],
    },
    {
      name: "Babysitters",
      url: "/babysitters",
      role: [ROLE_PARENT],
    },
    {
      name: "Payments",
      url: "/payments",
      role: [ROLE_PARENT, ROLE_ADMIN],
    },
  ];

  const logout = () => userRequest.logout();

  useEffect(() => {
    setMobNavHeight(mobNav.current.clientHeight);
  }, [role]);

  return (
    <>
      <div className="relative z-10 w-full mx-auto border-b border-black/15">
        <div className="bg-white w-full max-w-6xl mx-auto flex justify-between gap-8 px-8 sm:px-16 items-center h-16 font-semibold text-md">
          <div className="flex gap-10">
            <Link
              className="no-underline font-bold text-2xl text-black tracking-tighter"
              to="/">
              The Children Cloud
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            {navs.map((nav, key) =>
              nav.role.includes(role) ? (
                <NavLink
                  key={key}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold no-underline"
                      : "text-slate-500 no-underline"
                  }
                  to={nav.url}>
                  {nav.name}
                </NavLink>
              ) : null,
            )}
            <button
              onClick={logout}
              className="flex items-center text-white bg-black py-1 px-3 rounded">
              Logout
            </button>
          </div>
          <BiCategory
            onClick={toggleMobileNav}
            className={`${
              isMobileNavOpen ? "-rotate-45" : "rotate-0"
            } text-black block lg:hidden transition duration-500 cursor-pointer`}
            size={"1.8rem"}
          />
        </div>
      </div>
      <div
        ref={mobNav}
        style={{
          transform: `translateY(${
            isMobileNavOpen ? 0 : `-${mobNavHeight}px`
          })`,
        }}
        className={`flex lg:hidden z-0 py-2 absolute mt-16 top-0 w-full bg-white transition duration-500 flex-col items-center border-b border-black/10 rounded-b-xl`}>
        {navs.map((nav, key) =>
          nav.role.includes(role) ? (
            <NavLink
              key={key}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold p-2 my-1 no-underline"
                  : "text-slate-500 p-2 my-1 no-underline"
              }
              to={nav.url}>
              {nav.name}
            </NavLink>
          ) : null,
        )}
        <button
          onClick={logout}
          className="flex items-center text-rose-500 my-1 p-2 rounded">
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;

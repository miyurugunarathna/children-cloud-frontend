import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiCategory } from "react-icons/bi";

import userRequest from "../api/User/user.request";
import useFetchUserProfile from "../hooks/useFetchUserProfile";
import { ROLE_PARENT, ROLE_ADMIN, ROLE_STAFF } from "../constants";

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
      url: "/list",
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
      name: "Payment Inquery",
      url: "/payment-inquiry",
      role: [ROLE_PARENT],
    },
    {
      name: "Babysitters",
      url: "/babysitters",
      role: [ROLE_PARENT],
    },
    {
      name: "Payments",
      url: "/payment",
      role: [ROLE_STAFF, ROLE_ADMIN],
    },
    {
      name: "Bills",
      url: "/bill-cal",
      role: [ROLE_STAFF, ROLE_ADMIN],
    },
    {
      name: "Staff Home",
      url: "/StaffHome",
      role: [ROLE_STAFF],
    },
    {
      name: "Staff",
      url: "/Staff",
      role: [ROLE_STAFF],
    },
    {
      name: "Assign Staff",
      url: "/assignStaff",
      role: [ROLE_ADMIN],
    },
    {
      name: "Event",
      url: "/createEvents",
      role: [ROLE_ADMIN],
    },
    {
      name: "AssignedKids",
      url: "/assignedKids",
      role: [ROLE_STAFF],
    },
    {
      name: "Child-Allocate",
      url: "/allocate",
      role: [ROLE_ADMIN],
    },
    {
      name: "Attendance",
      url: "/attendance",
      role: [ROLE_STAFF],
    },
    {
      name: "Attendance-Report",
      url: "/report_attendance",
      role: [ROLE_ADMIN],
    },
  ];

  const logout = () => userRequest.logout();

  useEffect(() => {
    setMobNavHeight(mobNav.current.clientHeight);
  }, [role]);

  return (
    <>
      <div className="relative z-50 w-full mx-auto border-b border-black/15">
        <div className="bg-white w-full max-w-7xl mx-auto flex justify-between gap-8 px-8 sm:px-16 items-center h-16 font-semibold text-md">
          <div className="flex gap-10">
            <Link
              className="no-underline font-bold text-2xl text-black tracking-tighter"
              to="/">
              The Children Cloud
            </Link>
          </div>
          <div className="hidden lg:flex gap-3 items-center">
            {navs.map((nav, key) =>
              nav.role.includes(role) ? (
                <NavLink
                  key={key}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold text-sm no-underline"
                      : "text-slate-500 text-sm no-underline"
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
        className={`flex z-40 py-2 absolute mt-16 top-0 w-full bg-white transition duration-500 flex-col items-center border-b border-black/10 rounded-b-xl`}>
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

import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../AuthProvider/AuthProvider";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";


const NavBar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Logout Successful");
      navigate('/')
    });
  };

  useEffect(() => {
    if (user && user.photoURL) {
      setPhoto(user.photoURL);
    } else {
      setPhoto("https://i.ibb.co/S6FCDcL/image.png");
    }
  }, [loading]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="navbar bg-[#0f172b]">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden bg-[#FEA116] hover:bg-[#FEA116] px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[55] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className="block py-2 px-4 hover:bg-[#FEA116] hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-spots"
                className="block py-2 px-4 hover:bg-[#FEA116] hover:text-white"
              >
                Tourist Spots
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/add-spots"
                    className="block py-2 px-4 hover:bg-[#FEA116] hover:text-white"
                  >
                    Add Spot
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-spots"
                    className="block py-2 px-4 hover:bg-[#FEA116] hover:text-white"
                  >
                    My Spots
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-xl font-bold text-[#FEA116] uppercase ml-4"
        >
          Go Beyond
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-white uppercase font-bold space-x-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 bg-[#FEA116] text-white rounded-lg"
                  : "block py-2 px-4 hover:bg-[#FEA116] hover:text-white rounded-lg"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 bg-[#FEA116] text-white rounded-lg"
                  : "block py-2 px-4 hover:bg-[#FEA116] hover:text-white rounded-lg"
              }
              to={"/all-spots"}
            >
              Tourist Spots
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-spots"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 bg-[#FEA116] text-white rounded-lg"
                      : "block py-2 px-4 hover:bg-[#FEA116] hover:text-white rounded-lg"
                  }
                >
                  Add Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-spots"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 bg-[#FEA116] text-white rounded-lg"
                      : "block py-2 px-4 hover:bg-[#FEA116] hover:text-white rounded-lg"
                  }
                >
                  My Spots
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-1 md:space-x-4 lg:space-x-4">
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
              checked={theme === "light" ? false : true}
              className="hidden"
            />
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="text-white btn bg-[#FEA116] border-0 hover:bg-[#FEA116] hover:border-0"
            >
              Logout
            </button>
            <Tooltip id="my-tooltip" className="z-50" />
            <div className="avatar online">
              <div
                className="w-12 rounded-full z-55"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName || 'Unnamed'}
                data-tooltip-place="bottom-end"
              >
                {photo && <img src={photo} alt="User Avatar" />}
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-white btn bg-[#FEA116] border-0 hover:bg-[#FEA116] hover:border-0"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-white btn bg-[#FEA116] border-0 hover:bg-[#FEA116] hover:border-0"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

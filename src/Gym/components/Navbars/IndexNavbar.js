/*eslint-disable*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// components
import {AiOutlineAppstoreAdd , AiOutlineUserAdd } from "react-icons/ai";
import { RiHome3Line, RiAdminLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import IndexDropdown from "../Dropdowns/IndexDropdown.js";
import { AuthContext } from  '../../../shared/context/auth-context';

export default function Navbar(props) {
  const auth = useContext(AuthContext);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 sticky-top z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-black-700 text-lg font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap  text-decoration-none"
            >   <img
            className="h-8 w-8 inline-block bg-white"
            src={require("../../assets/img/x.png")}
            alt="..."
          />
            <i>treme Gym</i>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
          {auth.role==='admin' &&  (<ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)} onClick={() => setNavbarOpen(!navbarOpen)}>
              <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/members"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <RiHome3Line  className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"/>{" "}
                  Home
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/addmember"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <AiOutlineUserAdd className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Add Member
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/addpackage"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <AiOutlineAppstoreAdd className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Manage Packages
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/earnings"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <GiTakeMyMoney className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Earnings
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/allquery"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <DiJqueryLogo className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Queries
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/users"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <RiAdminLine className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  User's access
                </Link>
              </li>
            </ul>)}


            {auth.role==='employee' &&  (<ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
              <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/members"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <RiHome3Line  className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"/>{" "}
                  Home
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/addmember"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <AiOutlineUserAdd className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Add Member
                </Link>
                </li>
                <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/allpackage"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <AiOutlineAppstoreAdd className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                   Packages
                </Link>
                </li>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/addpackage"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <AiOutlineAppstoreAdd className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Manage Packages
                </Link>
                {/* <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/earnings"
                >
                  <GiTakeMyMoney className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Earnings
                </Link> */}
                 <li className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/allquery"
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  <DiJqueryLogo className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Queries
                </Link>
                </li>
                {/* <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  to="/users"
                >
                  <RiAdminLine className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  User's access
                </Link> */}
            
            </ul>)}



            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {auth.role==='admin' && (<li className="flex items-center">
                <IndexDropdown />
              </li>)}
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  href=""
                  // target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  href=""
                  // target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-decoration-none"
                  href=""
                  // target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
             
             
              {!auth.isLoggedIn && ( <Link to="/user/auth">  <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 text-decoration-none"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Login
                </button></Link>)}
          {auth.isLoggedIn && (<button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 text-decoration-none"
                  type="button" onClick={auth.logout}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Logout
                </button>)}
             
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

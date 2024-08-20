import Logo from "../../img/logo/yazhisai.jpg";
import { FaSearchengin } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import Darkmode from "../darkmode";
import { FaCaretDown } from "react-icons/fa";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import UserContext from "../../Utils/UserContext";
import { useSelector } from "react-redux";
import { useState, useLocation } from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
    submenu: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"],
  },
  {
    id: 2,
    name: "About Us",
    link: "/about",
    submenu: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"],
  },
  {
    id: 3,
    name: "Products",
    link: "/Products",
    submenu: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"],
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact",
    submenu: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"],
  },
];
const droupdownmenu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/#",
  },
  {
    id: 3,
    name: "Products",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/#",
  },
];

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const data = React.useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const [btnLogin, setbtnLogin] = React.useState("Login");

  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <div className="sticky top-0 z-[9999]"> */}
      {/* upper navbar */}
      <div className="bg-primary/80 py-1 dark:bg-gray-900 dark:text-white">
        <div className="container flex justify-between items-center">
          <div className="w-10">
            <a href="">
              <img src={Logo} alt="MainLogo" />
            </a>
          </div>
          {/* searchbar */}
          <div className="flex justify-between gap-4">
            <div className="group flex items-center relative">
              <input
                type="text"
                placeholder="Search Here"
                className="w-[200px] rounded-full group-hover:w-[300px] border border-gray-300 transition-all duration-300  focus:outline-none focus:border-1 px-2 py-1 focus:border-primary group-hover:border-primary focus:w-[300px] "
              />
              <FaSearchengin className="absolute right-3 text-gray-500 group-hover:text-primary cursor-pointer" />
            </div>
            {/* order button  */}

            {/* Test */}
            <button
              onClick={() => alert("Test")}
              className="bg-gradient-to-r from-primary to-secondary transition-all text-white duration-200 px-2 py-1 rounded-full flex group items-center gap-3"
            >
              <span className="group-hover:block hidden transition-all duration-200 ">
                Order
              </span>
              <IoMdCart className="text-xl text-white cursor-pointer" />
            </button>
            <div>
              <Darkmode />
            </div>
            <div>
              <button
                onClick={() => {
                  btnLogin === "Login"
                    ? setbtnLogin("Logout")
                    : setbtnLogin("Login");
                }}
                className="bg-gradient-to-r from-primary to-secondary transition-all text-white duration-200 px-2 py-1 rounded-full flex group items-center gap-3"
              >
                {btnLogin}
              </button>
            </div>
            <button className="md:hidden" onClick={toggleNavbar}>
              x
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:block ">
          <ul className="md:flex md:gap-4 justify-center py-2 border-1 bg-white dark:bg-gray-800 sm:hidden">
            {Menu.map((data) => (
              <li key={data.id} className="group relative">
                <Link
                  to={data.link}
                  className="px-4 hover:text-primary font-semibold dark:text-white dark:hover:text-secondary"
                >
                  {data.name}
                </Link>
                {/* <div className="hidden group-hover:block z-[9999] absolute w-[120px] bg-white border">
                  <ul>
                     {
                        Menu.submenu.map((data) => (
                           <li key={data.id} className="px-2 py-2 hover:bg-primary/60 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:text-secondary hover:font-semibold">
                              <a href={data.link}>{data.name}</a>
                           </li>
                        ))
                     }
                  </ul>
               </div> */}
              </li>
            ))}
            <li className="group relative">
              <Link
                to=""
                className="flex items-center gap-2 sm:pl-3 font-semibold hover:text-primary dark:hover:text-secondary dark:text-white"
              >
                Trending
                <FaCaretDown className="transition-all duration-300 group-hover:rotate-180" />
              </Link>
              <div className="hidden group-hover:block z-[9999] absolute w-[120px] bg-white border">
                <ul>
                  {droupdownmenu.map((data) => (
                    <li
                      key={data.id}
                      className="px-2 py-2 hover:bg-primary/60 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:text-secondary hover:font-semibold"
                    >
                      <a href={data.link}>{data.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="ml-5">
              <Link
                to="/cart"
                className="flex items-center gap-2 font-semibold hover:text-primary dark:hover:text-secondary dark:text-white"
              >
                Cart: <b>{cartItems?.length}</b>
              </Link>
            </li>
            <li className="ml-5 dark:text-white">
              Online Status: <b>{onlineStatus ? "Online" : "Offline"}</b>
            </li>
            <li className="ml-5 text-red-600">
              User: <b>{data.loggedInUser}</b>
            </li>
          </ul>
        </div>
      )}
      {/* lower navbar */}
      {/* </div> */}
    </div>
  );
};
export default Navbar;

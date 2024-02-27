import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-blue-500 w-full h-20  flex items-center justify-center ">
      <div className="z-50 px-5 py-5 md:w-auto w-full  flex justify-between">
        <h1 className="text-[#252B42]  font-bold text-[24px]">Bandage</h1>
        <div className="flex ml-[5rem]">
          <AiOutlineSearch
            size={25}
            className="text-[#252B42] lg:hidden ml-[1rem]"
          />
          <BsCart3 size={25} className="text-[#252B42] lg:hidden ml-[1rem]" />
        </div>
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <Menu
            className="text-[#252B42]"
            name={`${open ? "close" : "menu"}`}
          ></Menu>
        </div>
      </div>

      <ul className="md:flex hidden  items-center gap-8">
        <li>
          <Link
            to="/"
            className="px-2 text-[#737373] font-bold text-[14px] py-4"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className="px-2 flex text-[#252B42] font-bold text-[14px] py-4"
          >
            Shop
            <div className="text-[#252B42] ml-3">
              <ChevronDown />
            </div>
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="px-2 text-[#737373] font-bold text-[14px] py-4"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            className="px-2 text-[#737373] font-bold text-[14px] py-4"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="px-2 text-[#737373] font-bold text-[14px] py-4"
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/pages"
            className="px-2 text-[#737373] font-bold text-[14px] py-4"
          >
            Pages
          </Link>
        </li>
      </ul>

      <div className="flex">
        <BsPerson
          size={25}
          className="text-[#23A6F0] hidden sm:inline-block ml-[5rem]"
        />
        <span className="px-2 hidden sm:inline-block text-[#23A6F0] font-bold text-[14px] py-1">
          Login / Register
        </span>
        <AiOutlineSearch
          size={25}
          className="text-[#23A6F0] hidden sm:inline-block ml-[1rem]"
        />
        <BsCart
          size={25}
          className="text-[#23A6F0] hidden sm:inline-block ml-[1rem]"
        />
        <span className="text-[#23A6F0] hidden sm:inline-block px-2 font-bold text-[14px] py-1">
          1
        </span>
        <IoIosHeartEmpty
          size={25}
          className="text-[#23A6F0] hidden sm:inline-block ml-[1rem]"
        />
        <span className="text-[#23A6F0] hidden sm:inline-block px-2 font-bold text-[14px] py-1">
          1
        </span>
      </div>

      <div>
        <ul
          className={`
        md:hidden bg-blue-500  absolute  w-full button-0 py-24 pl-4
        duration-500 top-0 ${open ? "left-0" : "left-[-100vw]"}
        `}
        >
          <li>
            <Link
              to="/"
              className="px-3 text-[#737373] inline-block font-bold text-[14px]  py-4"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              className="px-3  text-[#252B42] inline-block font-bold text-[14px]  py-4"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="px-3 text-[#737373] inline-block font-bold text-[14px] py-4"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="px-3 text-[#737373] inline-block font-bold text-[14px] py-4"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="px-3 text-[#737373] inline-block font-bold text-[14px] py-4"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/pages"
              className="px-3 text-[#737373] inline-block font-bold text-[14px] py-4"
            >
              Pages
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

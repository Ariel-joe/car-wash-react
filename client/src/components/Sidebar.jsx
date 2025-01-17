import React from "react";
import { MdIncompleteCircle } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="w-full bg-creamish py-4 min-h-screen">
      {/* logo goes here */}
      <div className="flex justify-center items-center">
        <img src="/img/Nairobi-cream-bg.png" width={"120px"} alt="" />
      </div>

      <div className="flex flex-col gap-4 py-4 pl-4">
        {/* pending vehicles */}
        <abbr
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/pending"
        >
          <MdIncompleteCircle size={24} className="mr-1" />
          Pending V
        </abbr>

        {/* completed vehicles */}
        <abbr
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/#"
        >
          <IoCheckmarkDoneCircleOutline size={24} className="mr-1" />
          Completed V
        </abbr>

        {/* detailers list */}
        <abbr
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/#"
        >
          <FaRegUser size={24} className="mr-1" />
          detailers
        </abbr>

        {/* customers list */}
        <abbr
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/#"
        >
          <HiOutlineUsers size={24} className="mr-1" />
          Customers
        </abbr>
      </div>
    </div>
  );
};

export { Sidebar };

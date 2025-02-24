import React from "react";
import { MdIncompleteCircle } from "react-icons/md";
import {
  IoAddCircleOutline,
  IoCheckmarkDoneCircleOutline,
} from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-[15%] bg-creamish h-full overflow-hidden">
      {/* logo goes here */}
      <div className="flex justify-center py-2 items-center">
        <img src="/img/Nairobi-cream-bg.png" width={"120px"} alt="" />
      </div>

      <div>
        <h2 className="pt-4 px-4 text-lg py-1">Home</h2>
        <hr className="border-1 border-gray-600" />
      </div>

      <div className="flex flex-col gap-4 py-4">
        {/* pending vehicles */}
        {/* <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/"
        >
          <IoAddCircleOutline size={24} className="mr-1" />
          Add Customer
        </NavLink> */}
        {/* pending vehicles */}
        <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/"
        >
          <MdIncompleteCircle size={24} className="mr-1" />
          Pending V
        </NavLink>

        {/* inprogress  */}
        <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/progress"
        >
          <TbProgressCheck size={24} className="mr-1" />
          Inprogress
        </NavLink>

        {/* completed vehicles */}
        <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/completed"
        >
          <IoCheckmarkDoneCircleOutline size={24} className="mr-1" />
          Completed V
        </NavLink>

        {/* detailers list */}
        <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/detailers"
        >
          <FaRegUser size={24} className="mr-1" />
          detailers
        </NavLink>

        {/* customers list */}
        <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/customers"
        >
          <HiOutlineUsers size={24} className="mr-1" />
          Customers
        </NavLink>

        {/* payments records */}
        <NavLink
          className="flex text-gray-700 items-center text-[16px] py-1 px-4 hover:cursor-pointer"
          to="/Payments"
        >
          <GiTakeMyMoney size={24} className="mr-1" />
          Payments
        </NavLink>
      </div>

      <div>
        <h2 className="px-4 text-lg">Analytics</h2>
        <hr className="border-1 border-gray-600" />
      </div>
    </div>
  );
};

export { Sidebar };

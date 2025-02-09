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
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-full bg-creamish py-4 min-h-screen">
      {/* logo goes here */}
      <div className="flex justify-center items-center">
        <img src="/img/Nairobi-cream-bg.png" width={"120px"} alt="" />
      </div>

      <div className="flex flex-col gap-4 py-4 pl-4">
        {/* pending vehicles */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/"
        >
          <IoAddCircleOutline size={24} className="mr-1" />
          Add Customer
        </Link>
        {/* pending vehicles */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/pending"
        >
          <MdIncompleteCircle size={24} className="mr-1" />
          Pending V
        </Link>

        {/* inprogress  */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/progress"
        >
          <TbProgressCheck size={24} className="mr-1" />
          Inprogress
        </Link>

        {/* completed vehicles */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/completed"
        >
          <IoCheckmarkDoneCircleOutline size={24} className="mr-1" />
          Completed V
        </Link>

        {/* detailers list */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/detailers"
        >
          <FaRegUser size={24} className="mr-1" />
          detailers
        </Link>

        {/* customers list */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/customers"
        >
          <HiOutlineUsers size={24} className="mr-1" />
          Customers
        </Link>

        {/* payments records */}
        <Link
          className="flex text-gray-700 items-center text-[16px] py-1 hover:cursor-pointer"
          to="/Payments"
        >
          <GiTakeMyMoney size={24} className="mr-1" />
          Payments
        </Link>
      </div>
    </div>
  );
};

export { Sidebar };

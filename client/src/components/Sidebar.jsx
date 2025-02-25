import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from "react-router";
import { CircleCheckBig, CircleDashed, LayoutDashboard, User, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="px-1 w-[14%] bg-creamish py-4 h-full border overflow-hidden">
      {/* logo goes here */}
      <div className="flex justify-center py-2 items-center">
        <img src="/img/Nairobi-cream-bg.png" width={"120px"} alt="" />
      </div>

      <div className="pt-4 py-1">
        {/* <h2 className="pt-4 px-2 text-lg py-1 text-gray-400">Home</h2> */}
        <hr className="border-1 border-gray-300 mx-8" />
      </div>

      <div className="flex flex-col gap-4 py-4">
        {/* pending vehicles */}
        {/* <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/"
        >
          <IoAddCircleOutline size={24} className="mr-1" />
          Add Customer
        </NavLink> */}
        {/* pending vehicles */}
        <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/"
        >
          <LayoutDashboard size={24} className="mr-1" />
          Pending services
        </NavLink>

        {/* inprogress  */}
        <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/progress"
        >
          <CircleDashed size={24} className="mr-1" />
          Inprogress
        </NavLink>

        {/* completed vehicles */}
        <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/completed"
        >
          <CircleCheckBig  size={24} className="mr-1" />
          Completed services
        </NavLink>

        {/* detailers list */}
        <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/detailers"
        >
          <User  size={24} className="mr-1" />
          Detailers
        </NavLink>

        {/* customers list */}
        <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/customers"
        >
          <Users  size={24} className="mr-1" />
          Customers
        </NavLink>

        {/* payments records */}
        <NavLink
          className="flex text-gray-700 rounded-md items-center text-base py-1 px-4 hover:cursor-pointer"
          to="/Payments"
        >
          <GiTakeMyMoney size={24} className="mr-1" />
          Payments
        </NavLink>
      </div>

      <div className="pt-4 py-1">
        {/* <h2 className="pt-4 px-2 text-lg py-1 text-gray-400">Home</h2> */}
        <hr className="border-1 border-gray-300 mx-8" />
      </div>
    </div>
  );
};

export { Sidebar };

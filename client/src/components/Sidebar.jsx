import React from "react";
const Sidebar = () => {
  return (
    <div className="w-full bg-creamish py-4 min-h-screen">
      {/* logo goes here */}
      <div className="flex justify-center items-center">
        <img src="/img/Nairobi-cream-bg.png" width={"120px"} alt="" />
      </div>

      {/* navigation buttons */}

      <div className="flex flex-col gap-4 py-4 justify-center items-center">
      <a className="text-gray-700 text-sm py-1" to="/#">
          New Customer
        </a>
        <a className="text-gray-700 text-sm py-1" to="/#">
          Pending Services
        </a>
        <a className="text-gray-700 text-sm py-1" to="/#">
          Completed Services
        </a>
        <a className="text-gray-700 text-sm py-1" to="/#">
          detailers
        </a>
        <a className="text-gray-700 text-sm py-1" to="/#">
          Customers
        </a>
      </div>
    </div>
  );
};

export { Sidebar };

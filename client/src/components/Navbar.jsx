import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-4 items-center border-b-2 py-4">
        <div>
          <h1>Welcome back!</h1>
        </div>
        <div>
          <button className="bg-black text-creamish px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export { Navbar };

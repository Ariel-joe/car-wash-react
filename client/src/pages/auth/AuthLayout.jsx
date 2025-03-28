import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[90%] sm:w-2/3 max-w-[650px] shadow-2xl px-10 py-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { AuthLayout };
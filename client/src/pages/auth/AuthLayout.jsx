import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left Column (Image with Trapezium Shape) */}
      <div className="w-7/12 h-full relative clip-left">
        <img
          src="img/login-page.jpg"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
        {/* White Opacity Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30"></div>
      </div>

      {/* Right Column (Login Form with Trapezium Shape) */}
      <div className="w-5/12 flex justify-center items-center bg-white clip-right">
        <div className="w-full max-w-[500px] shadow-lg px-10 py-12 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };

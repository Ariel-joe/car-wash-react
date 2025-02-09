import React from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="flex">
      <div className="w-[16%]">
        <Sidebar />
      </div>

      <div className="w-[84%]">
        <Navbar />
        <main className="w-full flex items-center justify-center my-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { App };

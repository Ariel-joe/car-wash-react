import React from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { PendServices } from "./pages/PendServices";

const App = () => {
  return (
    <div className="flex">
      <div className="w-[16%]">
        <Sidebar />
      </div>

      <div className="w-[84%]">
        <Navbar />
        <main className="w-[84%] mx-auto ml-20px sm:ml-3vw my-4 text-gray-800 text-base">
          <PendServices />
        </main>
      </div>
    </div>
  );
};

export { App };

import React from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <div className="w-[14%]">
        <Sidebar />
      </div>

      <div className="w-[86%]">
        <Navbar />
        <main>
          <h1>this is the home page</h1>
        </main>
      </div>
    </div>
  );
};

export { App };

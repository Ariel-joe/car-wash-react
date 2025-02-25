import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Outlet } from "react-router";

const App = () => {
  return (
      <div className="flex h-screen w-full">
        <Sidebar />

      <div className="w-[85%] h-full overflow-auto relative">
        <Navbar />
        <main className="w-full flex items-center justify-center mt-20">
          <Outlet />
        </main>
      </div>
      </div>
  );
};

export { App };

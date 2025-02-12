import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Toaster position="top-right" richColors />
        <Outlet />
      </div>
    </>
  );
};

export { GlobalLayout };

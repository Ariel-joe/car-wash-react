import { useEffect } from "react";
import { useUserStore } from "../../store/user-store";
import { Outlet, useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

const GlobalLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUserStore();

  // Get the user data
  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("Please login to access that page");
      navigate("/login");
      return;
    }
  }, []);
  return (
    <>
      <div>
        <Toaster position="top-center" richColors />
        <Outlet />
      </div>
    </>
  );
};

export { GlobalLayout };

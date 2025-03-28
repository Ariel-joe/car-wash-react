import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { toast } from "sonner";
import { useUserStore } from "../../store/user-store";

const ProtectedRouteWrapper = () => {
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

  return <Outlet />;
};

export { ProtectedRouteWrapper };
import { useState } from "react";
import { Modal } from "./Modal";
import { AddCustomerpage } from "../pages/protected/AddCustomerpage";
import { useUserStore } from "../store/user-store";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  // const { logout } = useUserStore();

  const navigate = useNavigate()

  // handling logout
  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  // Define closeModal function
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex flex-row w-[85%] bg-white fixed justify-between px-4 items-center border-b-2 py-3">
        <form>
          <input
            type="text"
            className="w-72 border text-sm px-4 py-2 ml-2 rounded-md"
            placeholder="Search here"
          />
        </form>

        <div className="flex justify-evenly items-center gap-5">
          {/* information on vehicles */}

          <p className="text-sm text-gray-450">0 pending</p>
          <div className="h-5 border"></div>

          <p className="text-sm text-gray-450">0 Inprogess</p>

          {/* New Customer */}
          <button
            onClick={() => setModal(true)}
            className="bg-creamish px-4 py-2 rounded-md hover:cursor-pointer flex justify-center items-center text-sm text-lightDarkGray"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            New Customer
          </button>
          <button onClick={handleLogout} className="bg-black text-creamish px-4 py-2 text-sm rounded-md">
            Logout
          </button>

          {/* This is the modal */}
          <Modal openModal={modal} closeModal={closeModal}>
            <AddCustomerpage closeModal={closeModal} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export { Navbar };

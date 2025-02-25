import React from "react";

const Modal = ({ openModal, closeModal, children }) => {
  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-md p-4 w-[60%]"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Close button inside the modal */}
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };

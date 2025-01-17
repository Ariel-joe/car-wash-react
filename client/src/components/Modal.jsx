import React from "react";
import { useEffect, useRef } from "react";


const Modal = ({ openModal, closeModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <div>
      <dialog ref={ref} onCancel={closeModal} className="rounded-md">
        {children}

        <div className="flex justify-between">
        <button
          onClick={closeModal}
          className="border border-black flex items-center text-black px-4 py-2 rounded-md hover:cursor-pointer mb-6 ml-6"
        >
          Cancel
        </button>

        <button className="bg-creamish text-DarkGray px-4 py-2 rounded-md mb-6 mr-6">Add Customer</button>
        </div>
      </dialog>
    </div>
  );
};

export { Modal };

import React from "react";
import { useEffect, useRef } from "react";
import { SlClose } from "react-icons/sl";


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
      <dialog ref={ref} onCancel={closeModal}>
        {children}
        <button
          onClick={closeModal}
          className="border border-black flex items-center text-black px-4 py-2 rounded-md hover:cursor-pointer mb-6 ml-6"
        >
            <SlClose size={20} className="mr-1" />
          Cancel
        </button>
      </dialog>
    </div>
  );
};

export { Modal };

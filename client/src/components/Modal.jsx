import React from "react";
import { useEffect, useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

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
        <div className="">
        <button
            onClick={closeModal}
            className="text-black hover:cursor-pointer"
          >
            cancel
          </button>

        </div>

        {children}
      </dialog>
    </div>
  );
};

export { Modal };

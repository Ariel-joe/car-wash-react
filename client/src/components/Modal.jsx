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
      </dialog>
    </div>
  );
};

export { Modal };

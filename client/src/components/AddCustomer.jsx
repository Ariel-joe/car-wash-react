import React from "react";

const AddCustomer = () => {
  return (
    <div className="items-center justify-center w-full md:w-full p-4">
      <form className="bg-white px-8 py-4 rounded-lg w-full max-w-3xl">
        <div>
          <div className="flex">
            <label>Name</label>
          <input type="text" className="border w-full" />

          </div>
        </div>
      </form>
    </div>
  );
};

export { AddCustomer };

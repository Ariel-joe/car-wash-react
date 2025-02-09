import React from "react";

const AddCustomerpage = () => {
  return (
    <>
      <div className="items-center justify-center w-full md:w-[560px] p-2">
        <form className="bg-white px-8 py-4 w-full">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-xl mb-5">New Customer</h1>
            </div>

            {/*  */}
            <div className="flex items-center mb-3 w-full">
              <label className="text-lg">Name:</label>
              <input
                type="text"
                className="border w-full rounded-md ml-2 py-2 px-3"
                placeholder="John Doe"
              />
            </div>

            {/*  */}
            <div className="flex items-center mb-3 w-full">
              <label className="text-lg">Phone:</label>
              <input
                type="text"
                className="border w-full rounded-md ml-2 py-2 px-3"
                placeholder="+254712345678"
              />
            </div>

            {/*  */}
          </div>
        </form>
      </div>
    </>
  );
};

export { AddCustomerpage };

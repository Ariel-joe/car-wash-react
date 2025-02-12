import React from "react";

const AddCustomerpage = () => {
  return (
    <>
      <div className="items-center justify-center w-full p-2">
        <form className="bg-white px-8 py-4 w-full">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-xl mb-5">New Customer</h1>
            </div>

            {/*  */}
            <div className="flex space-x-8 mb-6">
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Name</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="John Doe"
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Phone</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="+254712345678"
                />
              </div>
            </div>

            {/*  */}
            <div>vehicle details</div>
            {/*  */}

            <div className="flex space-x-8">
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Number Plate</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="John Doe"
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Type</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="+254712345678"
                />
              </div>
            </div>

            {/*  */}
            <hr />
            {/*  */}

            <div className="flex space-x-8">
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Service</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="John Doe"
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Amount</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="+254712345678"
                />
              </div>
            </div>

            {/*  */}
          </div>
        </form>
      </div>
    </>
  );
};

export { AddCustomerpage };

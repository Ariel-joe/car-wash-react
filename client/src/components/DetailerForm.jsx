import React from "react";

const DetailerForm = () => {
  return (
    <>
      <div className="my-8">
        <h2>Add Detailer</h2>
        <form>
          <div className="flex gap-4 my-2">
            <input
              type="text"
              className="border w-full border-black px-2 rounded-sm py-1"
              placeholder="name"
              required
            />
            <input
              type="text"
              className="border w-full border-black px-2 rounded-sm py-1"
              placeholder="phone number"
              required
            />
          </div>
          <div className="mb-3 w-full">
            <div className="relative">
              <label>Status</label>
              <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option value="" disabled>
                  Select option
                </option>
                <option value="">Active</option>
                <option value="">InActive</option>
                <option value="">Dormant</option>
              </select>
            </div>
          </div>

          <button className="bg-gray-700 w-full py-2 px-4 text-white rounded-md">
            Add Detailer
          </button>
        </form>
      </div>
    </>
  );
};

export { DetailerForm };

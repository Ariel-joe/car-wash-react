import React from "react";

const PendServices = () => {
  return (
    <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
    <b>Image</b>
    <b>Name</b>
    <b>No. Plate</b>
    <b>Category</b>
    <b>SubCategory</b>
    <b>price</b>
    <b className="text-center">Action</b>
  </div>
  );
};

export { PendServices };

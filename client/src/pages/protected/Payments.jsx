import React from "react";

const Payments = () => {
    // user
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    
  return (
    <>
      <h1>this is the finance section</h1>
    </>
  );
};

export { Payments };

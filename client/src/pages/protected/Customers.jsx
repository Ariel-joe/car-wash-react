import React from "react";

const Customers = () => {
    // user
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    
  return <>
  <h1>customers are found here</h1>
  </>;
};

export { Customers };

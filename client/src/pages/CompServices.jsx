import React, { useEffect, useState } from "react";

const CompServices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/vehicles");

        const result = await response.json();

        if (result.success) {
          setData(result.data);

          return;
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                Customer
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                phone number
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                vehicle type
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                number plate
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                service
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                price
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                detailer
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                status
              </th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {data
              .filter((elem) => elem.status === "Completed")
              .map((elem, i) => (
                <tr key={i} className="border-b-2">
                  <th className="py-2 font-light">{elem.customer.name}</th>
                  <th className="py-2 font-light">{elem.customer.phone}</th>
                  <th className="py-2 font-light">{elem.vehicle_type.type}</th>
                  <th className="py-2 font-light">{elem.number_plate}</th>
                  <th className="py-2 font-light">{elem.service.service}</th>
                  <th className="py-2 font-light">ksh. {elem.customer.amount}</th>
                  <th className="py-2 font-light">{elem.detailer.name}</th>
                  <th className="py-2 font-light">{elem.status}</th>
                  <th className="py-2 font-light"></th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { CompServices };

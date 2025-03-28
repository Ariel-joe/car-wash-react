import { useVehicleStore } from "../../store/vehicle-store.js";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";

const CompServices = () => {
    // user
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    
  const [data, setData] = useState([]);
  const { fetchVehicles, vehicles, isLoading } = useVehicleStore();
  const [vehiclesCompleted, setVehiclesCompleted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchVehicles();
    };

    fetchData();
  }, [fetchVehicles]);

  useEffect(() => {
    setData(vehicles);
  }, [vehicles]);

  // filtering
  useEffect(() => {
    setVehiclesCompleted(
      vehicles.filter((vehicle) => vehicle.status === "Completed")
    );
  }, [vehicles]);

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
            {isLoading ? (
              <tr>
                <td colSpan="8" className="text-center py-4 h-screen">
                  <Spin size="large" />
                </td>
              </tr>
            ) : vehiclesCompleted.length === 0 ? (
              <tr>
                <td colSpan="8" className="h-screen text-center py-4">
                  No vehicles yet!
                </td>
              </tr>
            ) : (
              vehiclesCompleted.map((elem, i) => (
                <tr key={i} className="border-b-2">
                  <th className="py-2 font-light">{elem.customer.name}</th>
                  <th className="py-2 font-light">{elem.customer.phone}</th>
                  <th className="py-2 font-light">{elem.vehicle_type.type}</th>
                  <th className="py-2 font-light">{elem.number_plate}</th>
                  <th className="py-2 font-light">{elem.service.service}</th>
                  <th className="py-2 font-light">
                    ksh. {elem.customer.amount}
                  </th>
                  <th className="py-2 font-light">{elem.detailer.name}</th>
                  <th className="py-2 font-light">{elem.status}</th>
                  <th className="py-2 font-light"></th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { CompServices };

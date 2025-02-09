import { useEffect, useState } from "react";

const PendServices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/vehicles");

        const result = await response.json();

        console.log(result);

        setData(result.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <table className="w-[90%]">
          <thead>
            <tr>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                Customer
              </th>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                phone number
              </th>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                vehicle type
              </th>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                number plate
              </th>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                service
              </th>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                detailer
              </th>
              <th scope="col" className="border-b-2 px-3 w-[250px]">
                status
              </th>
              <th scope="col" className="border-b-2 px-3 w-[150px]">
                actions
              </th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {data.map((elem, i) => (
              <tr key={i} className="border-b-2">
                <th className="py-2 font-light">{elem.customer.name}</th>
                <th className="py-2 font-light">{elem.customer.phone}</th>
                <th className="py-2 font-light">{elem.vehicle_type.type}</th>
                <th className="py-2 font-light">{elem.number_plate}</th>
                <th className="py-2 font-light">{elem.number_plate}</th>
                <th className="py-2 font-light">{elem.status}</th>
                <th className="py-2 font-light">
                  <div className="flex justify-around">
                    <button className="bg-blue-500 px-3 py-1 text-white rounded-md">
                      edit
                    </button>
                    <button className="bg-red-500 px-3 py-1 text-white rounded-md">
                      Done
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { PendServices };

import { useEffect, useState } from "react";

const PendServices = () => {
  const [data, setData] = useState([]);
  const [detailers, setDetailers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/vehicles");

        const result = await response.json();

        setData(result.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);


  // fetching the detailers
  useEffect(() => {
    const fetchDetailers = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/detailers");

        const result = await response.json();

        if (result.success) {
          setDetailers(result.data);

          return;
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchDetailers();
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
                detailer
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
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
                <th className="py-2 font-light">full body-wash</th>

                {/* looping through for the detailers */}
                <th className="py-2 font-light">{}</th>
                <th className="py-2 font-light">{elem.status}</th>
                <th className="py-2 font-light">
                  <div className="flex justify-evenly">
                    <button className="bg-blue-500 px-3 mr-1 text-sm py-1 text-white rounded-md">
                      edit
                    </button>
                    <button className="bg-orange-500 px-3 py-1 text-sm text-white rounded-md">
                      Assign
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

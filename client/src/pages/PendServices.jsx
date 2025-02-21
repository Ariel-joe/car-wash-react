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
            <tr className="bg-slate-100">
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
                <th className="py-2 font-light">
                  <div>
                    <div className="relative">
                      <select className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                        {detailers.map((detailer, i) => (
                          <option key={i} value={detailer.name}>
                            {detailer.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </th>
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

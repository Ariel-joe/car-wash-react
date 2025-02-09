import { useEffect, useState } from "react";

const PendServices = () => {
  const [data, setDatas] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/vehicles");

        const result = await response.json();

        setData(result);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);


  
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="">
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
              status
            </th>
            <th scope="col" className="border-b-2 px-3 w-[150px]">
              actions
            </th>
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          <tr>
            <th className="py-4">data</th>
            <th className="py-4">data</th>
            <th className="py-4">data</th>
            <th className="py-4">data</th>
            <th className="py-4">data</th>
            <th className="py-4">

              
              <div className="flex justify-around">
                <button className="bg-green-500 px-3 py-1 text-white rounded-md">
                  edit
                </button>
                <button className="bg-red-500 px-3 py-1 text-white rounded-md">
                  Done
                </button>
              </div>
            </th>
          </tr>
        </tbody>
        
      </table>
    </>
  );
};

export { PendServices };

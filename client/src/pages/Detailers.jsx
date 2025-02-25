import { DetailerForm } from "../components/DetailerForm";
import { Trash, UserRoundPen } from "lucide-react";
import { useEffect, useState } from "react";

const Detailers = () => {
  const [detailersData, setDetailersData] = useState([]);

  // fetching detailers.
  useEffect(() => {
    const fetchDetailers = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/detailers");

        const result = await response.json();

        if (result.success) {
          setDetailersData(result.data);

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
        <div>
          <DetailerForm />
        </div>

      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                detailer
              </th>
              <th scope="col" className="border-b-2 px-3 py-2 w-[150px]">
                phone number
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
          {/* // .filter((elem) => elem.status === "In Progress") */}
          <tbody>
            {detailersData.map((detailer, i) => (
              <tr key={i} className="border-b-2">
                <th className="py-2 font-light">{detailer.name}</th>
                <th className="py-2 font-light">{detailer.phone_number}</th>
                <th className="py-2 font-light">{detailer.activity}</th>
                <th className="py-2 font-light">
                  <div className="flex gap-4 justify-evenly">
                    <button className="flex items-center gap-1 bg-blue-500 px-2 py-1 rounded-md text-white">
                      <UserRoundPen size={16} /> 
                      Edit
                    </button>
                    <button className="flex items-center gap-1 bg-red-500 px-2 py-1 rounded-md text-white">
                      <Trash size={16} /> 
                      Delete
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

    </>
  );
};

export { Detailers };

import { useEffect, useState } from "react";
import { toast } from "sonner";

const InprogressPage = () => {
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

  // function to handle the changing of status to Completed
  const handleStatusChange = async (vehicleId) => {
    console.log("clicked to update status");

    try {
      const response = await fetch(
        `http://localhost:3006/api/vehicles/update?id=${vehicleId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vehicleId, status: "Completed" }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Status updated successfully");

        // Update the local state to reflect the change
        setData((prevData) =>
          prevData.map((vehicle) =>
            vehicle._id === vehicleId
              ? { ...vehicle, status: "Completed" }
              : vehicle
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Error updating status");
    }
  };

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
            {data
              .filter((elem) => elem.status === "In Progress")
              .map((elem, i) => (
                <tr key={i} className="border-b-2">
                  <th className="py-2 font-light">{elem.customer.name}</th>
                  <th className="py-2 font-light">{elem.customer.phone}</th>
                  <th className="py-2 font-light">{elem.vehicle_type.type}</th>
                  <th className="py-2 font-light">{elem.number_plate}</th>
                  <th className="py-2 font-light">{elem.service.service}</th>
                  <th className="py-2 font-light">{elem.detailer.name}</th>
                  <th className="py-2 font-light">{elem.status}</th>
                  <th className="py-2 font-light">
                    <button
                      onClick={() => handleStatusChange(elem._id)}
                      className="bg-green-500 px-2 py-1 rounded-md text-white"
                    >
                      Complete
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { InprogressPage };

import { useEffect, useState } from "react";
import { toast } from "sonner";

const PendServices = () => {
  const [data, setData] = useState([]);

  const [detailersData, setDetailersData] = useState([]);

  // State to store assigned detailers per vehicle
  const [assignedDetailers, setAssignedDetailers] = useState({});

  // function to handle assigning detailers to services
  const handleAssignDetailer = async (vehicleId, detailerName) => {
    setAssignedDetailers((prevState) => ({
      ...prevState,
      [vehicleId]: detailerName,
    }));

    // Check if a detailer has been selected
    if (!detailerName) {
      toast.error("Please select a detailer");
      return;
    }

    // handling the assignment  to the server
    try {
      // Make a PUT request using fetch
      const response = await fetch(
        "http://localhost:3006/api/detailers/assign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vehicleId, detailerName }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success(`${detailerName} assigned to ${result.vehicle.number_plate} successfully`);
      } else {
        throw new Error(`Failed to assign detailer: ${response.statusText}`);
      }

      // Update the local state to reflect the change
      setData((prevData) =>
        prevData.map((vehicle) =>
          vehicle._id === vehicleId
            ? { ...vehicle, status: "In Progress" }
            : vehicle
        )
      );
    } catch (error) {
      console.error("Error assigning detailer:", error);
    }
  };

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
  }, [detailersData]);

  // function for adding the detailer to the service
  // const addDetailer = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3006/api/detailers/assign", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         vehicle_id: data[0]._id,
  //         detailer_name: detailer,
  //       }),
  //     });

  //     const result = await response.json();

  //     console.log(result);

  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // fetching the user data
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
  }, [data]);

  // fetching the detailers

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
              .filter((elem) => elem.status === "Pending")
              .map((elem, i) => (
                <tr key={i} className="border-b-2">
                  <th className="py-2 font-light">{elem.customer.name}</th>
                  <th className="py-2 font-light">{elem.customer.phone}</th>
                  <th className="py-2 font-light">{elem.vehicle_type.type}</th>
                  <th className="py-2 font-light">{elem.number_plate}</th>
                  <th className="py-2 font-light">{elem.service.service}</th>

                  {/* looping through for the detailers */}
                  <th className="py-2 font-light">
                    <select
                      value={assignedDetailers[elem._id] || ""}
                      onChange={(e) =>
                        setAssignedDetailers((prev) => ({
                          ...prev,
                          [elem._id]: e.target.value, // Update state for this specific vehicle
                        }))
                      }
                      className="px-2 py-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a detailer
                      </option>
                      {detailersData
                        .filter((detailer) => detailer.status === "available")
                        .map((detailer) => (
                          <option key={detailer._id} value={detailer.name}>
                            {detailer.name}
                          </option>
                        ))}
                    </select>
                  </th>
                  <th className="py-2 font-light">{elem.status}</th>
                  <th className="py-2 font-light">
                    <div className="flex justify-evenly">
                      <button className="bg-blue-500 px-3 mr-1 text-sm py-1 text-white rounded-md">
                        edit
                      </button>
                      <button
                        onClick={() =>
                          handleAssignDetailer(
                            elem._id,
                            assignedDetailers[elem._id]
                          )
                        }
                        disabled={!assignedDetailers[elem._id]} // Disable if no detailer selected
                        className={`px-3 py-1 text-sm text-white rounded-md ${
                          assignedDetailers[elem._id]
                            ? "bg-orange-500"
                            : "bg-gray-500 cursor-not-allowed"
                        }`}
                      >
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

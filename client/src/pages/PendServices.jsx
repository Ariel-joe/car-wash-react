import { Spin } from "antd";
import { useCustomerStore } from "../store/Customer-store";
import { useVehicleStore } from "../store/vehicle-store";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useDetailerStore } from "../store/Detailer-store";

const PendServices = () => {
  // detailer store
  const { detailers, fetchDetailers, assignDetailerFunc } = useDetailerStore();
  const [assignedDetailers, setAssignedDetailers] = useState({});

  // customer store
  const { customer } = useCustomerStore();

  // vehicle store
  const { vehicles, fetchVehicles, isLoading, statusUpdater } =
    useVehicleStore();
  const [vehicleData, setVehicleData] = useState([]);
  const [vehiclesPending, setVehiclesPending] = useState([])


  // fetch vehicles
  useEffect(() => {
    const fetchData = async () => {
      await fetchVehicles();
    };

    fetchData();
  }, [customer, vehicleData]);

  useEffect(() => {
    setVehicleData(vehicles);
  }, []);

  // fetching detailers
  useEffect(() => {
    const fetchDetailersFunc = async () => {
      await fetchDetailers();
    };
    fetchDetailersFunc();
  }, []);


  // filtering pending vehicles
  useEffect(() => {
    setVehiclesPending(
      vehicles.filter((vehicle) => vehicle.status === "Pending")
    );

    console.log(vehicles);
    
  }, [vehicles]);

  // function to handle assigning detailers to services
  const handleAssignDetailer = async (vehicleId, detailerName) => {
    // Check if a detailer has been selected
    if (!detailerName) {
      toast.error("Please select a detailer");
      return;
    }

    // handling the assignment of detailer to the server
    try {
      const responseSuccess = await assignDetailerFunc(vehicleId, detailerName);

      if (responseSuccess) {
        toast.success(`${detailerName} assigned successfully`);
        fetchDetailers();
      } else {
        throw new Error(`Failed to assign detailer: ${response.statusText}`);
      }

      statusUpdater(vehicleId, "In Progress");
    } catch (error) {
      console.error(error.message);
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
            {isLoading ? (
              <tr>
                <td colSpan="8" className="text-center py-4 h-screen">
                  <Spin size="large" />
                </td>
              </tr>
            ) : vehiclesPending.length === 0 ? (
              <tr>
                <td colSpan="8" className="h-screen text-center py-4">
                  No pending vehicles
                </td>
              </tr>
            ) : (
              vehiclesPending
                .map((elem, i) => (
                  <tr key={i} className="border-b-2">
                    <th className="py-2 font-light">{elem.customer.name}</th>
                    <th className="py-2 font-light">{elem.customer.phone}</th>
                    <th className="py-2 font-light">
                      {elem.vehicle_type.type}
                    </th>
                    <th className="py-2 font-light">{elem.number_plate}</th>
                    <th className="py-2 font-light">{elem.service.service}</th>
                    <th className="py-2 font-light">
                      <select
                        value={assignedDetailers[elem._id] || ""}
                        onChange={(e) =>
                          setAssignedDetailers((prev) => ({
                            ...prev,
                            [elem._id]: e.target.value,
                          }))
                        }
                        className="px-2 py-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a detailer
                        </option>
                        {detailers
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
                          disabled={!assignedDetailers[elem._id]}
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
                ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { PendServices };

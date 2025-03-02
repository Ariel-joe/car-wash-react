import { Spin } from "antd";
import { useDetailerStore } from "../store/Detailer-store";
import { useVehicleStore } from "../store/vehicle-store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const InprogressPage = () => {
  const [data, setData] = useState([]);
  const [detailersData, setDetailersData] = useState([]);

  // vehicle store
  const { vehicles, fetchVehicles, statusUpdater, isLoading } =
    useVehicleStore();
  const [vehicleData, setVehicleData] = useState([]);

  // detailer Store
  const { detailers, fetchDetailers, updateDetailerStatus } =
    useDetailerStore();

  // fetch vehicles
  useEffect(() => {
    const fetchData = async () => {
      await fetchVehicles();
    };

    fetchData();
  }, [vehicleData]);

  useEffect(() => {
    setVehicleData(vehicles);
  }, []);

  // function to handle the changing of status to Completed
  const handleStatusChange = async (vehicleId, detailerId) => {
    console.log("clicked to update status");

    try {
      // updating the status of the vehicle
      const vehicleStatusUpdated = await statusUpdater(vehicleId, "Completed");

      if (vehicleStatusUpdated) {
        // If vehicle status update was successful, update detailer status
        const detailerStatusUpdated = await updateDetailerStatus(
          detailerId,
          "available"
        );

        if (detailerStatusUpdated) {
          toast.success("Status updated successfully");
        } else {
          toast.warning(
            "Vehicle status updated, but detailer status update failed"
          );
        }
      } else {
        toast.error("Failed to update vehicle status");
      }
    } catch (error) {
      console.error(error.message);
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
            {isLoading ? (
              <tr>
                <td colSpan="8" className="text-center py-4 h-screen">
                  <Spin size="large" />
                </td>
              </tr>
            ) : (
              vehicles
                .filter((elem) => elem.status === "In Progress")
                .map((elem, i) => (
                  <tr key={i} className="border-b-2">
                    <th className="py-2 font-light">{elem.customer.name}</th>
                    <th className="py-2 font-light">{elem.customer.phone}</th>
                    <th className="py-2 font-light">
                      {elem.vehicle_type.type}
                    </th>
                    <th className="py-2 font-light">{elem.number_plate}</th>
                    <th className="py-2 font-light">{elem.service.service}</th>
                    <th className="py-2 font-light">{elem.detailer.name}</th>
                    <th className="py-2 font-light">{elem.status}</th>
                    <th className="py-2 font-light">
                      <button
                        // update function to change status of detailer to available

                        onClick={() =>
                          handleStatusChange(elem._id, elem.detailer?._id)
                        }
                        className="bg-green-500 px-2 py-1 rounded-md text-white"
                      >
                        Complete
                      </button>
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

export { InprogressPage };

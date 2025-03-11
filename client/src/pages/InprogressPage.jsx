import { Spin } from "antd";
import { useDetailerStore } from "../store/Detailer-store";
import { useVehicleStore } from "../store/vehicle-store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const InprogressPage = () => {
  // vehicle store
  const { fetchVehicles, statusUpdater, vehicles, isLoading, error } =
    useVehicleStore();

  // detailer Store
  const { fetchDetailers, updateDetailerStatus } = useDetailerStore();

  const [vehiclesInProgress, setVehiclesInProgress] = useState([]);

  // fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchVehicles();
        await fetchDetailers();

      } catch (err) {
        console.error("Failed to load initial data:", err);
        toast.error("Failed to load initial data");
      }
    };

    loadData();
  }, [fetchVehicles, fetchDetailers]);

  useEffect(() => {
    setVehiclesInProgress(
      vehicles.filter((vehicle) => vehicle.status === "In Progress")
    );
  }, [vehicles]);

  // function to handle the changing of status to Completed
  const handleStatusChange = async (vehicleId, detailerId) => {
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

  // Error handling
  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        Error loading vehicles: {error}
      </div>
    );
  }

  return (
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

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="8" className="text-center py-4 h-screen">
                <Spin size="large" />
              </td>
            </tr>
          ) : vehiclesInProgress.length === 0 ? (
            <tr>
              <td colSpan="8" className="h-screen text-center py-4">
                No vehicles in progress
              </td>
            </tr>
          ) : (
            vehiclesInProgress.map((vehicle, i) => (
              <tr key={vehicle._id || i} className="border-b-2 text-center">
                <td className="py-2 px-3 font-light">{vehicle.customer?.name}</td>
                <td className="py-2 px-3 font-light">{vehicle.customer?.phone}</td>
                <td className="py-2 px-3 font-light">
                  {vehicle.vehicle_type?.type}
                </td>
                <td className="py-2 px-3 font-light">{vehicle.number_plate}</td>
                <td className="py-2 px-3 font-light">{vehicle.service?.service}</td>
                <td className="py-2 px-3 font-light">{vehicle.detailer?.name}</td>
                <td className="py-2 px-3 font-light">{vehicle.status}</td>
                <td className="py-2 px-3 font-light">
                  <button
                    onClick={() =>
                      handleStatusChange(vehicle._id, vehicle.detailer?._id)
                    }
                    className="bg-green-500 px-2 py-1 rounded-md text-white"
                    disabled={!vehicle.detailer?._id}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export { InprogressPage };

import { create } from "zustand";

const useVehicleStore = create((set) => ({
    vehicles: [],
    isLoading: true,
    fetchVehicles: async () => {
      set({isLoading: true});

      try {
        const response = await fetch("http://localhost:3006/api/vehicles");
        const { data } = await response.json();
        set({ vehicles: data, isLoading: false });
      } catch (error) {
        console.error(error.message);
        set({isLoading: false})
      }
    },

    statusUpdater: (vehicleId, status) => {

      set((state) => {
        const updatedVehicles = [...state.vehicles]

        const index = updatedVehicles.findIndex(vehicle => vehicle._id === vehicleId)

        if (index !== -1 ) {
          updatedVehicles[index] = {
            ...updatedVehicles[index], status
          }
        }

        return {vehicles: updatedVehicles}
      })



    }
  }));

export { useVehicleStore };

      // Update the local state to reflect the change
      // setData((prevData) =>
      //   prevData.map((vehicle) =>
      //     vehicle._id === vehicleId
      //       ? { ...vehicle, status: "In Progress" }
      //       : vehicle
      //   )
      // );

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
      // Create a variable to track success/failure
      let success = false;
      
      set((state) => {
        const updatedVehicles = [...state.vehicles];
        const index = updatedVehicles.findIndex(vehicle => vehicle._id === vehicleId);
        
        if (index !== -1) {
          updatedVehicles[index] = {
            ...updatedVehicles[index], 
            status
          };
          success = true; // Set the success flag
          return { vehicles: updatedVehicles };
        }
        
        // If vehicle not found, return the unchanged state
        return { vehicles: state.vehicles };
      });
      
      return success;
    },
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

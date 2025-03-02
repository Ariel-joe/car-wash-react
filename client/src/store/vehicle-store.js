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

  statusUpdater: async (vehicleId, status) => {
    try {
      // Make API call to update vehicle status in the database
      const response = await fetch("http://localhost:3006/api/vehicles/update", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vehicleId, status }), 
      });

      if (!response.ok) {
        throw new Error('Failed to update vehicle status');
      }

      set((state) => {
        const updatedVehicles = [...state.vehicles];
        const index = updatedVehicles.findIndex(vehicle => vehicle._id === vehicleId);
        
        if (index !== -1) {
          updatedVehicles[index] = {
            ...updatedVehicles[index], 
            status
          };
          return { vehicles: updatedVehicles };
        }
        
        return { vehicles: state.vehicles };
      });
      
      return true; 
    } catch (error) {
      console.error(error.message);
      return false; 
    }
  },
}));

export { useVehicleStore };
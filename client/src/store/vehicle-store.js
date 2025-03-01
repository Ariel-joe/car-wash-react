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
  }));

export { useVehicleStore };

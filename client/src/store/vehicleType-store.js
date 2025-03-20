import { create } from "zustand";

const useVehicleTypeStore = create((set) => ({
  vehicleTypes: [],

  fetchVehicleTypes: async () => {
    try {
      const response = await fetch("http://localhost:3006/api/vehicles/types");

      if (response.ok) {
        const { data } = await response.json();

        set({ vehicleTypes: data });
        return;
      }
    } catch (error) {
      console.error(error.message);
      console.log("failed");
    }
  },
}));

export { useVehicleTypeStore };

import { create } from "zustand";

const vehicleuseStore = create((set) => ({
  vehicles: null,
  fetchVehicles: async () => {
    try {
      const response = await fetch("http://localhost:3006/api/vehicles");

      const { data } = await response.json();

      set({ vehicles: data });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

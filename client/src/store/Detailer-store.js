import { create } from "zustand";

const useDetailerStore = create((set) => ({
  detailers: null,
  assignedDetailer: null,

  fetchDetailers: async () => {
    try {
      const response = await fetch("http://localhost:3006/api/detailers");

      if (response.ok) {
        const { data } = await response.json();
        set({ detailers: data });

        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  },

  assignDetailerFunc: async (vehicleId, detailerName) => {
    try {
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

      if (response.ok) {
        // Update the assignedDetailers state
        set((state) => ({
          assignedDetailers: {
            ...state.assignedDetailers,
            [vehicleId]: detailerName,
          },
        }));

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  },
}));

export { useDetailerStore };

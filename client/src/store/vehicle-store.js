import { create } from "zustand";

const useVehicleStore = create((set, get) => ({
  vehicles: [],
  isLoading: true,
  error: null,

  fetchVehicles: async () => {
    // Check if vehicles are already loaded to prevent unnecessary refetching

    set({ isLoading: true, error: null });

    try {
      const response = await fetch("http://localhost:3006/api/vehicles");

      if (response.ok) {
        const { data } = await response.json();

        set({
          vehicles: data,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error.message);
      set({
        isLoading: false,
        error: error.message,
        vehicles: [],
      });
      return [];
    }
  },

  statusUpdater: async (vehicleId, status) => {
    try {
      const response = await fetch("http://localhost:3006/api/vehicles/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ vehicleId, status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update vehicle status");
      }

      set((state) => {
        const updatedVehicles = state.vehicles.map((vehicle) =>
          vehicle._id === vehicleId ? { ...vehicle, status } : vehicle
        );

        console.log({ updatedVehicles });

        return { vehicles: updatedVehicles };
      });

      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  },
}));

export { useVehicleStore };

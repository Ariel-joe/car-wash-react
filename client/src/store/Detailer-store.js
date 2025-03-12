import { create } from "zustand";

const useDetailerStore = create((set) => ({
  detailers: [],
  assignedDetailer: [],

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
        "http://localhost:3006/api/detailers",
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
        set((state) => {
          return {
            assignedDetailer: {
              ...state.assignedDetailer,
              [vehicleId]: detailerName,
            },
          };
        });

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  },

  updateDetailerStatus: async (detailerId, status) => {
    try {
      // Make API call to update detailer status in the database
      const response = await fetch(
        `http://localhost:3006/api/detailers/${detailerId}`,
        {
          method: "PATCH", // Note that your route uses PATCH
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }), // Adjust payload according to your API
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update detailer status");
      }

      // If API call is successful, update the local state
      set((state) => {
        if (!state.detailers) return { detailers: null };

        const updatedDetailers = [...state.detailers];
        const index = updatedDetailers.findIndex(
          (detailer) => detailer._id === detailerId
        );

        if (index !== -1) {
          updatedDetailers[index] = {
            ...updatedDetailers[index],
            status,
          };
          return { detailers: updatedDetailers };
        }

        return { detailers: state.detailers };
      });

      return true; // Return success
    } catch (error) {
      console.error("Error updating detailer status:", error);
      return false; // Return failure
    }
  },
}));

export { useDetailerStore };

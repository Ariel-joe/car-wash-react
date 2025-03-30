import { create } from "zustand";

const useServiceStore = create((set) => ({
  services: null,

  fetchServices: async () => {
    try {
      const response = await fetch("http://localhost:3006/api/services", {
        credentials: "include",
      });

      if (response.ok) {
        const { data } = await response.json();
        set({ services: data });
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export { useServiceStore };

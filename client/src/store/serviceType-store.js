import { create } from "zustand";

const useServiceTypeStore = create((set) => ({
  serviceType: null,

  fetchServiceType: async () => {
    try {
      const response = await fetch("http://localhost:3006/api/servicetypes");

      if (response.ok) {
        const { data } = await response.json();
        set({ serviceType: data });
      }

      console.log(data);
    } catch (error) {}
  },
}));

export { useServiceTypeStore };

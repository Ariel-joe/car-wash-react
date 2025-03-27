import { create } from "zustand";

const useServiceTypeStore = create((set, get) => ({
  serviceType: null,
  selectedVehicleType: '',
  selectedService: '',
  price: 0,

  setvehicleType: (vehicle) => {
    set({selectedVehicleType: vehicle, selectedService: "", price: 0})
  },

  setService: (service) => {
    set({selectedService: service, price: get().getPrice(get().selectedVehicleType, service)})
  },

  fetchServiceType: async () => {
    try {
      const response = await fetch("http://localhost:3006/api/servicetypes");

      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        set({ serviceType: data });
      }

    } catch (error) {}
  },
}));

export { useServiceTypeStore };

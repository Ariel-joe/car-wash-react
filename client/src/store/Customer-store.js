import { create } from "zustand";

const useCustomerStore = create((set) => ({
  customer: null,
  fetchCustomer: async (formData) => {
    try {
      const response = await fetch("http://localhost:3006/api/customers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { data } = await response.json();

      set({ customer: data });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export { useCustomerStore };

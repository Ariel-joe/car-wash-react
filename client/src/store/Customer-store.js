import { create } from "zustand";

const useCustomerStore = create((set) => ({
  customer: null,
  fetchCustomer: async (formData) => {
    try {
      const response = await fetch("http://localhost:3006/api/customers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.ok) {
        const { data } = await response.json();

        set({ customer: data });

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

export { useCustomerStore };

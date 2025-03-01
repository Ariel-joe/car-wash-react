import { create } from "zustand";

const useCustomerStore = create((set) => ({
  customer: null,
  customerCount: 0,
  fetchCustomer: async (formData) => {
    try {
      const response = await fetch("http://localhost:3006/api/customers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(response.ok){
          const { data } = await response.json();

          
          set({ customer: data });
          
          customerCount = set(customerCount + 1);
          return true;
      }else {
        return false;
      }


    } catch (error) {
      console.error(error.message);

      return false;
    }
  },
}));

export { useCustomerStore };

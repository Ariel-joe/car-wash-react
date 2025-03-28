import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  login: async (userData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();

        console.log(data);
        set({ user: data, isLoggedIn: true });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  logout: () => {
    set({ user: null, isLoggedIn: false });
  },
}));

export { useUserStore };
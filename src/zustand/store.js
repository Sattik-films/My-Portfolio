// src/stores/menuStore.js
import { create } from "zustand";

const useMenuStore = create((set) => ({
  menu: "home", // Initial state of the menu, can be null or an object
  setMenu: (newMenu) => set({ menu: newMenu }), // Update the menu
  resetMenu: () => set({ menu: "home" }), // Optional: Reset the menu
}));

export default useMenuStore;

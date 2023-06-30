import { create } from "zustand";

const useStore = create(set => ({
    items: [{}],
    addItems: (newItem) => set((state) => ({items: newItem}))
}))

export default useStore
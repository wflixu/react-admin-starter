


import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 0,
  asyncAdd: async () =>{
    setTimeout(()=>{
      set((state) => ({ count: state.count + 1 }))
    },2000)
  },
  increate: (step) => set((state) => ({ count: state.count + (step ?? 1) })),
  decreate: (step) => set((state) => ({ count: state.count - (step ?? 1) })),
  reset: () => set({ count: 0 }),
}))
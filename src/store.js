import {create} from "zustand"

export const useAuthStore = create ((set)=> ({
  token: "",
  isAdmin: false,
  addToken: (tokenvalue)=> {
    set((state)=> ({token: state.token = tokenvalue}))
  },
  delToken: ()=> {
    set((state)=> ({token: state.token = ""}))
  },
  checkAdmin: (value)=> {
    set((state)=> (value == "ADMIN" ? {isAdmin: state.isAdmin = true} : {isAdmin: state.isAdmin = false}))
  }
}))

//  const useToken = create((set) => ({
//     token: "",
//     setToken: (tokenvalue) => set((state)=>({
//         token: tokenvalue,
//         ...state.token
//     })),
//     delToken: () => set({token: ""}),
//   }))

//   const useFavorite = create((set, get) => ({
//     favorites: [],
//     addFavorites: (product) => set({favorites: favorites.push(product)}),
//     delFavorites: (product) => {
//         const newFavorites = get().favorites.filter(t => t.id !== id)
//     }
    
//   }))

//   const useCart = create((set, get) => ({
//     cart: [],
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
//   }))

//   const useOrders = create((set) => ({
//     orders: [],
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
//   }))

// export default useToken;
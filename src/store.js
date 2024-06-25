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

export const useFavoriteStore = create((set, get) => ({
    favorites: [],
    isFav: false,
    addFavorites: (product) => set((state)=> ({favorites: state.favorites.slice().push(product)})),
    delFavorites: (product) => set((state)=> ({favorites: state.favorites.slice().filter(t => t._id != product._id)})),
    getFavorites: (id) => set((state)=> ({isFav: state.favorites.slice().find(i => i._id == id) == true}))
  }))

export const useCartStore = create((set) => ({
    cart: [],
    isCart: false,
    addCart: (product) => set((state)=> ({cart: [...state.cart, product]})),
    delCart: (product) => set((state)=> ({cart: state.cart.filter(t => t.id != product._id)})),
    getCart: (id) => set((state)=> ({isCart: state.cart.find(i => i._id == id) != undefined}))
  }))

//  const useToken = create((set) => ({
//     token: "",
//     setToken: (tokenvalue) => set((state)=>({
//         token: tokenvalue,
//         ...state.token
//     })),
//     delToken: () => set({token: ""}),
//   }))

//   const useOrders = create((set) => ({
//     orders: [],
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
//   }))

// export default useToken;
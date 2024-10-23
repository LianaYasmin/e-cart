import { createSlice } from "@reduxjs/toolkit"


export const wishlistSlice =createSlice({
   name:'wishlist',
   initialState:[],
   reducers:{
    // to add items to the state
    addWishlistItem:(state,action)=>{
         state.push(action.payload)
    },

   //  to delete item from wishlist
    removeWishlistItem:(state,action)=>{
     return state.filter((item)=>item. id !=action.payload)
    }
   
   }
})

export const {addWishlistItem,removeWishlistItem}=wishlistSlice.actions

export default wishlistSlice.reducer
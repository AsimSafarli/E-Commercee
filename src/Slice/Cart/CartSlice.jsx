import { createSlice } from "@reduxjs/toolkit";

const LocalStorage = () => {
    var cart =localStorage.getItem("cart")
    if(cart){
        return JSON.parse(localStorage.getItem("cart"))
    } else{
        return []
    }
}

const storeLocalStorage = (data) =>{
    localStorage.setItem('cart',JSON.stringify(data))
}

const initialState={
    carts:LocalStorage(),
    count:0,
    amount:0
}
const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
      
            const itemInCartIndex = state.carts.findIndex((item) => item.id === itemToAdd.id);
      
            if (itemInCartIndex !== -1) {
              const existingItem = state.carts[itemInCartIndex];
              const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + itemToAdd.quantity,
                totalPrice: existingItem.totalPrice + itemToAdd.price * itemToAdd.quantity,
              };
      
              state.carts[itemInCartIndex] = updatedItem;
            } else {
              state.carts.push({
                ...itemToAdd,
                totalPrice: itemToAdd.price * itemToAdd.quantity,
              });
            }
      
            storeLocalStorage(state.carts);
            console.log("ADD TO ITEM", itemToAdd);
            console.log("Updated cart", state.carts);
          },
      
      
        removeFromCart:(state,action)=>{
            const tempCart = state.carts.filter(item=> item.id !== action.payload.id)
            state.carts=tempCart
            storeLocalStorage(state.carts)
        },
        cleareCart:(state)=>{
            state.carts=[]
            storeLocalStorage(state.carts)
        },
       getCartTotal :(state)=>{
        state.amount = state.carts.reduce((cartTotal,cartItem)=>{
            return cartTotal += cartItem.totalPrice
        },0)
        state.count = state.carts.length
       }
    }
})
export const {addToCart,
    removeFromCart,
    cleareCart,
    getCartTotal} = cartSlice.actions
export default cartSlice.reducer
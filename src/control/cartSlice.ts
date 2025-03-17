import { createSlice } from '@reduxjs/toolkit';
import courseItems from '../couseItem';

const initialState = {
    cartItems: courseItems,
    total:0,
    quantity:5
}

const cartSlice = createSlice({
    name: 'cart',
 initialState,
   reducers: {
    clearCart: (state) => {
        state.cartItems = []
        state.total = 0
        state.quantity = 0

    }
    ,
    deleteById: (state, action) => {
        console.log(action)
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    },
    increase: (state,action) => {
    
        console.log("increase",action.payload)

       const cartItem= state.cartItems.find(item => item.id === action.payload.id);
        if (cartItem) {
        cartItem.quantity++;
    }
     
    },
    decrease: (state,action) => {
        console.log("decrease", action.payload)
       const cartItem= state.cartItems.find(item => item.id === action.payload.id);
        if (cartItem) {
        cartItem.quantity-=1;
    }
   
     

    },
     calcutateTotal:(state)=>{
        let total=0;
        let quantity=0;
        state.cartItems.forEach(item=>{
            total+=item.price*item.quantity;
            quantity+=item.quantity;
        })
        state.total=total;
        state.quantity=quantity;
    }
   }
})


export default cartSlice.reducer
export const {clearCart,deleteById,increase,decrease,calcutateTotal} = cartSlice.actions

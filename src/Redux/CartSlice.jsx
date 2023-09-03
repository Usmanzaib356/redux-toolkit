import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItems: (state, action) => {
            const existingItem = state.find((cartItem) => cartItem.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const updatedCartItems = state.filter(item => item.id !== action.payload.id);
            return updatedCartItems;
        },
        removeAllItems: () => {
            return [];
        },
        updateQuantity: (state, action) => {
            state.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                }
                return item;
            });
        },
    },
})

export const { addItems, removeAllItems, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

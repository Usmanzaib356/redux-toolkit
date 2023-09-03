import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice";
import CartReducer from "./CartSlice";

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
  }
};

const store = configureStore({
  reducer: {
    coin: DataReducer,
    cart: CartReducer,
  },
  preloadedState: {
    cart: loadCartState(), 
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

store.subscribe(() => {
  saveCartState(store.getState().cart); 
});

export default store;

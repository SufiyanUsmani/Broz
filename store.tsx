import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

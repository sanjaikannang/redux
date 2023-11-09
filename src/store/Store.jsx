import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/CartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;

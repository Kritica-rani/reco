import { configureStore } from "@reduxjs/toolkit";
import { reducer as orderReducer } from "../feature/order/OrderPageSlice";
export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

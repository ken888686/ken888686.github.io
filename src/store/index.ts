import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slice/cart';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;

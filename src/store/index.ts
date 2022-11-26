import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  item: string[];
}

const initialState: CartState = {
  item: [],
};

const cartList = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.item.push(action.payload);
    },
    // removeItem(state, action) { },
  },
});

const store = configureStore({
  reducer: {
    cart: cartList.reducer,
  },
});

console.log(store);

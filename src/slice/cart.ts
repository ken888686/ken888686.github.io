import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type item = {
  id: number;
  name: string;
};

type cart = {
  id: number;
  items: item[];
};

const initialState: cart = {
  id: 0,
  items: [
    {
      id: 0,
      name: '',
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<item>) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice;

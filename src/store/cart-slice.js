import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    changed: false,
  },
  reducers: {
    replaceCarts(state, action) {
      state.items = action.payload.items;
      state.totalQty = action.payload.totalQty;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;
      state.changed = true;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItems.qty++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQty--;
      state.changed = true;
      if (existingItems.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.qty--;
        existingItems.totalPrice =
          existingItems.totalPrice - existingItems.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

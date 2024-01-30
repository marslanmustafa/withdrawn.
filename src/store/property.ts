import { createSlice } from '@reduxjs/toolkit';
const initialPropertyState = { type: "", wishlistCount: 0, wishlist: [] };
const propertySlice = createSlice({
  name: "property",
  initialState: initialPropertyState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setAddItemInWishlist(state, action) {
      state.wishlistCount = state.wishlistCount + 1;
      state.wishlist = action.payload;
    },
    setRemoveItemInWishlist(state, action) {
      state.wishlistCount = state.wishlistCount - 1;
      state.wishlist = action.payload;
    },
  }
})
export const {
  setType, setAddItemInWishlist, setRemoveItemInWishlist
} = propertySlice.actions;
export default propertySlice.reducer;
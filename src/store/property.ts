import { createSlice } from '@reduxjs/toolkit';
const initialPropertyState = { type: "", wishlistCount: 0, wishlist: [], searchResult: [] };
const propertySlice = createSlice({
  name: "property",
  initialState: initialPropertyState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setWishlistCount(state, action) {
      state.wishlistCount = action.payload;
    },
    setWishlist(state, action) {
      state.wishlist = action.payload;
    },
    setSearchResult(state, action) {
      state.searchResult = action.payload;
    },
  }
})
export const {
  setType, setWishlistCount, setWishlist,setSearchResult
} = propertySlice.actions;
export default propertySlice.reducer;
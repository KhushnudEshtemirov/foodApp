import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodItems: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood: (state, { payload }) => {
      state.foodItems = payload;
    },
    removeFood: (state, { payload }) => {
      state.foodItems = state.foodItems.filter((item) => item.id !== payload);
    },
  },
});

export const { addFood, removeFood } = foodSlice.actions;
export default foodSlice.reducer;

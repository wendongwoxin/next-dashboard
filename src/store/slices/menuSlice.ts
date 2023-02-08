import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  status: boolean;
}

const initialState: MenuState = {
    status: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    closeMenu: (state: MenuState) => {
        state.status = false;
    },
    openMenu: (state: MenuState) => {
        state.status = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeMenu, openMenu } = menuSlice.actions;

export default menuSlice.reducer;

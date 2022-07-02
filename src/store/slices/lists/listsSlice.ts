import { createSlice } from "@reduxjs/toolkit";

export const listsSlice = createSlice({
  name: "list",
  initialState: {
    reservations: [],
    reservationsfilter: [],
    loading: false,
  },
  reducers: {
    startLoadLists: (state) => {
      state.loading = true;
    },
    setLists: (state, action) => {
      state.loading = false;
      state.reservations = action.payload.all;
      state.reservationsfilter = action.payload.reservations;
    },
    filteredLists: (state, action) => {
      if (action.payload.rol === "user") {
        state.reservationsfilter = state.reservations.filter(
          (p: any) =>
            new Date(p.time)
              .getMonth()
              .toString()
              .includes(action.payload.month) &&
            (p.idUser) === action.payload.idUser
        );
      } else {
        state.reservationsfilter = state.reservations.filter((p: any) =>
          new Date(p.time).getMonth().toString().includes(action.payload.month)
        );
      }
    },
  },
});

export const { startLoadLists, setLists, filteredLists } = listsSlice.actions;

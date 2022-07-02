import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    formUser: {
      id: "",
      name: "",
      lastname: "",
      rol: "",
      email: "",
      password: "",
    },
    formReservation: {
      id: "",
      title: "",
      description: "",
      active: true,
      time: "",
      timeInitial: "",
      idUser: "",
    },
  },
  reducers: {
    setAll: (state, action: PayloadAction<any>) => {
      state.formReservation.id = action.payload.id;
      state.formReservation.title = action.payload.title;
      state.formReservation.description = action.payload.description;
      state.formReservation.active = action.payload.active;
      state.formReservation.time = action.payload.time;
      state.formReservation.timeInitial = action.payload.time;
      state.formReservation.idUser = action.payload.idUser;
    },
    resetAll: (state) => {
      state.formReservation.id = "";
      state.formReservation.title = "";
      state.formReservation.description = "";
      state.formReservation.active = true;
      state.formReservation.time = "";
      state.formReservation.idUser = "";
    },
    setAllUser: (state, action: PayloadAction<any>) => {
      state.formReservation.id = action.payload.id;
      state.formUser.id = action.payload.id;
      state.formUser.name = action.payload.name;
      state.formUser.lastname = action.payload.lastname;
      state.formUser.rol = action.payload.rol;
      state.formUser.email = action.payload.email;
    },
    setInput: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      if (action.payload.name === "title") {
        state.formReservation.title = action.payload.value;
      }  
      if (action.payload.name === "description") {
        state.formReservation.description = action.payload.value;
      } 
      if (action.payload.name === "time") {
        state.formReservation.time = action.payload.value;
      }
    },
  },
});
export const { setInput, setAll, setAllUser,resetAll } = formSlice.actions;

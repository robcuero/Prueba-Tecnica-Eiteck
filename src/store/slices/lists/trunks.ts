import api from "../../api/reservationApi";
import swal from "sweetalert";
import { setLists, startLoadLists } from "./listsSlice";

export const getLists = (rol?: string, id?: string) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/reservations");
      const all = data;
      if (rol === "user") {
        const { data } = await api.get(`/reservations?idUser=${id}`);
        dispatch(setLists({ reservations: data, all: all }));
      } else {
        dispatch(setLists({ reservations: all, all: all }));
      }
    } catch (err) {}
  };
};

export const deleteList = (id: string) => {
  try {
    api.delete(`/reservations/${id}`).catch(function (error) {
      if (error.response) {
        return swal("Reservacion no eliminado intentelo de nuevo!");
      }
    });
    return swal("Reservacion Eliminada!");
  } catch (err) {
    return swal("Reservacion no eliminado intentelo de nuevo!");
  }
};

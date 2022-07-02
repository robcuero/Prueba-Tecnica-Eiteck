
import api from "../store/api/reservationApi";
import swal from "sweetalert";

export const saveReservations = async (data: any) => {
  try {
    swal("Reservacion ingresada correctamente!");
    return await api.post('/reservations', data);
  } catch (error) {
    swal("Reservacion no ingresada correctamente!");
  }
};

export const updateReservations = async (data: any) => {
  try {
    swal("Reservacion editada correctamente!");
    return await api.put(`/reservations/${data.id}`, data);
  } catch (error) {
    swal("Reservacion no editada correctamente!!");
  }
};


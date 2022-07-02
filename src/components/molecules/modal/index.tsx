import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon } from "../../../assets/icons";
import { saveReservations } from "../../../services/reservationService";
import { RootState } from "../../../store";
import { resetAll } from "../../../store/slices/form/formSlice";
import { getLists } from "../../../store/slices/lists";
import { Buttons } from "../../atoms/button";
import { Input } from "../../atoms/input";
import { Inputime } from "../../atoms/inputTime";
import "./index.css";


export const Modal: React.FC = () => {

  const { formReservation } = useSelector((state: RootState) => state.form);
  const { reservations } = useSelector((state: any) => state.lists);
  const { rol, id } = useSelector((state: RootState) => state.form.formUser);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispacth = useDispatch()
  const save = async () => {
    try {
      const reservationData = {
        title: formReservation.title,
        description: formReservation.description,
        active: formReservation.active,
        time: formReservation.time,
        idUser: id,
      };
      await saveReservations(reservationData);
      dispacth(resetAll());
      handleClose()
      dispacth(getLists(rol, id) as any);
    } catch (error) { }
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <Buttons icon={AddIcon} isDisabled={false} message={"Nuevo"} variant={"primary"} />
      </div>
      <Dialog className="modal--size" open={open} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <div className="input">
          <DialogContentText>
            To subscribe to this website, enter a title with your description and a date. We will send updates from time to time.
          </DialogContentText>
          <div className="input--size">
            <Input placeholder={'title'} />
            <Input placeholder={'description'} />
            <div>
              <Inputime />
              {reservations.find((elem) => elem.time === formReservation.time) ? <div>fecha registrada</div> : ''}
            </div>
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save} disabled={(((formReservation.title && formReservation.description && formReservation.time) === "") || (reservations.find((elem) => elem.time === formReservation.time))) ? true : false}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

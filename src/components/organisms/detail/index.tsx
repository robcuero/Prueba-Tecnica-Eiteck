
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateReservations } from '../../../services/reservationService';
import { RootState } from '../../../store';
import { resetAll } from '../../../store/slices/form/formSlice';
import { deleteList, getLists } from '../../../store/slices/lists';
import { Buttons, Input } from '../../atoms'
import { Inputime } from '../../atoms/inputTime';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { DetailWrapper } from './styles';

export const Detail = () => {
  useEffect(() => {
    dispatch(getLists(rol, id) as any);
  }, []);
  const dispatch = useDispatch()
  const { reservations } = useSelector((state: any) => state.lists);
  const { rol, id } = useSelector((state: RootState) => state.form.formUser);
  const history = useHistory()
  const save = async () => {
    try {
      const reservationData = {
        id: formReservation.id,
        title: formReservation.title,
        description: formReservation.description,
        active: formReservation.active,
        time: formReservation.time,
        idUser: formReservation.idUser,
      };
      await updateReservations(reservationData);
      dispatch(resetAll());
      dispatch(getLists(rol, id) as any);
      history.push('/reservations')
    } catch (error) { }
  };

  const deleted = async (id: any) => {
    try {
      await deleteList(id);
      dispatch(getLists(rol, id) as any);
      dispatch(resetAll());
      history.push('/reservations')
    } catch (error) { }
  };
  const { formReservation, formUser } = useSelector((state: RootState) => state.form);
  return (
    <DetailWrapper>
      <Header />
      <div className='wrapper'>
        <div >
          <div >
            <div className='title--style'>Booking Information</div>
            <div>Names:  {formUser.name} {formUser.lastname}</div>
            <div className='subtitle--style'>
            </div>
          </div >
          <div className='subtitle--style'> Details</div>
          <div className='wrapper--name'>
            <div>
              <div> Title</div>
              <Input placeholder='title' value={formReservation.title} width="350" />
            </div>
            <div>
              <div> Descriptions</div>
              <Input placeholder='description' value={formReservation.description} width="350" />
            </div>
          </div >
          <div>
            <div className="size--date"> Date</div>
            <Inputime width={'350'} />
            {(reservations.find((elem) => (elem.time === formReservation.time && elem.time !== formReservation.timeInitial))) ? <div>fecha registrada</div> : ''}
          </div>
          <div className="size-button">
            <div onClick={() => { deleted(formReservation.id) }} >
              <Buttons isDisabled={false} message={'Delete'} variant={"danger"} />
            </div>
            <div onClick={save} >
              <Buttons variant={"primary"} isDisabled={(((formReservation.title && formReservation.description && formReservation.time) === "") || ((reservations.find((elem) => elem.time === formReservation.time && elem.time !== formReservation.timeInitial)))) ? true : false} message={'Save'} />
            </div>
          </div>
        </div >
      </div>
      <Footer/>
    </DetailWrapper>
  )
}


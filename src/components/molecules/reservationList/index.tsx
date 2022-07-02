import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TableWrapper } from "./styles";
import { getLists } from "../../../store/slices/lists";
import { setAll } from "../../../store/slices/form/formSlice";
import { useHistory } from "react-router-dom";


export const Reservations = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { rol, id } = useSelector((state: RootState) => state.form.formUser);
  useEffect(() => {
    dispatch(getLists(rol, id) as any);
  }, []);

  const { reservationsfilter } = useSelector((state: RootState) => state.lists);

  const setEdit = (data: any) => {
    dispatch(setAll(data))
    history.push('/detail')
  }

  return (
    <TableWrapper>
      {reservationsfilter.length === 0 ? <div className="align-title">No existen reservaciones en este mes</div> : ''}
      <div className="block">
        {reservationsfilter?.map((data: any, index: number) => (
          <div className="block--details" onClick={() => { setEdit(data) }}>
            <div className="size-title">
              {data.title}
            </div>
            <div className="size-date">
              {data.time}
            </div>

          </div>
        ))}
      </div>
    </TableWrapper>
  );
};

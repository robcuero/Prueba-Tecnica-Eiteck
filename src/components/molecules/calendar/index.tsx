import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TableWrapper } from "./styles";
import { filteredLists, getLists } from "../../../store/slices/lists";
import { LocalizationProvider, PickersDay, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
import startOfDay from "date-fns/startOfDay";

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "selected"
})(({ theme, selected }) => ({
  ...(selected && {
    backgroundColor: "#8799ab",
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: "#979da3"
    },
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%"
  })
}));

export const Calendar = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState([startOfDay(new Date())]);
  const { reservationsfilter,reservations } = useSelector((state: any) => state.lists);
  const { id,rol } = useSelector((state: RootState) => state.form.formUser);
  useEffect(() => {
    dispatch(getLists(rol,id) as any);
  }, []);

  useEffect(() => {
    let array: any = []
    reservationsfilter.map(element => {
      array.push(new Date(element.time))
    });

    setValues(array)
  }, [reservationsfilter]);

  const findDate = (dates, date) => {
    const dateTime = date.getTime();
    return dates.find((item) => item.getTime() === dateTime);
  };

  const findIndexDate = (dates, date) => {

    const dateTime = date.getTime();
    return dates.findIndex((item) => item.getTime() === dateTime);
  };

  const onMonthChange = (month: any) => {
    month = (month.getMonth()).toString()
    dispatch(filteredLists({ month: month, idUser: id , rol:rol}))
  };
  const renderPickerDay = (date, selectedDates, pickersDayProps) => {

    if (!values) {
      return <PickersDay {...pickersDayProps} />;
    }
    const selected = findDate(values, date);
    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        selected={selected}
      />
    );
  };
  return (
    <TableWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          disablePast={true}
          displayStaticWrapperAs="desktop"
          label="Week picker"
          value={values}
          onMonthChange={onMonthChange}
          onChange={(newValue) => {
            //copying the values array 
            if (reservations.find(element => new Date(element.time).toString() === newValue.toString())) {
            } else {
              const array = [...values];
              const date = startOfDay(newValue);
              const index = findIndexDate(array, date);
              if (index >= 0) {
                array.splice(index, 1);
              } else {
                array.push(date);
              }
              setValues(array);
            }
          }}
          renderDay={renderPickerDay}
          renderInput={(params) => <TextField {...params} sx={{width: '550px'}}/>}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
    </TableWrapper>
  );
};

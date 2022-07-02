import React, { useState } from 'react'
import { Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { setInput } from "../../../store/slices/form/formSlice";
import { useDispatch, useSelector } from 'react-redux';
import { TimeWrapper } from './styles';
import { RootState } from '../../../store';
export interface InputProps {
    width?: string
}
export const Inputime: React.FC<InputProps> = ({ width }) => {
    const { formReservation } = useSelector((state: RootState) => state.form);
    const dispacth = useDispatch()
    const [value, setValue] = useState<Date>(
        new Date('2022-07-01T21:11:54'),
    );
    const handleChange = (newValue: any) => {
        setValue(newValue);
        const value = { value: newValue.toLocaleDateString('zh-Hans-CN', { month: '2-digit', day: '2-digit', year: 'numeric' }), name: "time" };
        dispacth(setInput(value));

    };
    return (
        <TimeWrapper width={width}>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <Stack spacing={3} className="input--time">
                    <DesktopDatePicker
                        disablePast={true}
                        label="Date desktop"
                        inputFormat="yyyy/MM/dd"
                        value={formReservation.time?formReservation.time:value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
        </TimeWrapper>

    )
}

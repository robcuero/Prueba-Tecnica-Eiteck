import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../../../store/slices/form/formSlice";
import { InputWrapper } from "./styles";

export interface InputProps {
  placeholder?: string;
  value?: string;
  width?: string
}

export const Input: React.FC<InputProps> = ({ placeholder, value ,width}) => {
  const dispacth = useDispatch();
  const [validation, setValidation] = useState('test');
  const onchange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = { value: event?.target.value, name: placeholder };
    setValidation(value.value)
    dispacth(setInput(value));
  };

  return (
    <InputWrapper  width={width} >
      <div className="input-wrapper">
        <input
          data-testid={"id-input"}
          type="search"
          value={value}
          className="input input-svg"
          placeholder={placeholder}
          onChange={(event) => onchange(event)}
        />
        {validation.length === 0?
          <div className="alert">error</div>:''
        }
      </div>
    </InputWrapper>
  );
};

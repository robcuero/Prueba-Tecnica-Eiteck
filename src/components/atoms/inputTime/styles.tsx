import styled from "styled-components";
import { InputProps } from ".";
import { device } from "../../../shared/size";

export const TimeWrapper = styled.div<InputProps>`
.input--time {
  width:${({ width = "150" }) => `${width}px`};
  margin-top: 10px;
}
 @media (max-width: 780px) {
  .input--time {
    width: 295px;
  }
}
`;

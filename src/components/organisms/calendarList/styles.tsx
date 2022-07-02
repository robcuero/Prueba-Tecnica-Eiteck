import styled from "styled-components";
import { device } from "../../../shared/size";

export const CalendarWrapper = styled.div`

  .body--resvert{
    padding: 0 1.5rem;
  }
  .size{
    display:flex;
    column-gap: 60px;
  }
  @media ${device.laptopS} {
 .size{
    display:block;
    column-gap: 60px;
  }
}
  @media ${device.tablet} {
    margin: 1.5rem;
    .input-wrapper {
      margin: 3%;
    }
  }
`;

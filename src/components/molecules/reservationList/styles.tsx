import styled from "styled-components";
import { device } from "../../../shared/size";

export const TableWrapper = styled.div`
  width: 100%;
 .block{
    cursor: pointer;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
    grid-auto-rows: 5rem;
  }
  .block--details{
    border-radius: 5px;
    padding: 14px;
    text-align: center;
    color: white;
    background-color: #8799ab;
  }
  .block--details:hover{
    background-color: #979da3;
  }

  .size-title{
   font-size:22px ;
 }
 .size-date{
   font-size:10px ;
 }

  /* @media ${device.laptopL} {
  .block { grid-template-columns: repeat(3, 1fr); }
}

@media ${device.laptop} {

  .block { grid-template-columns: repeat(2, 1fr); }
}
@media ${device.laptopS} {
display:flex ;
.block { grid-template-columns: repeat(2, 1fr); }
}

@media ${device.mobileL} {
display:flex ;
.block { grid-template-columns: repeat(2, 1fr); }
} */

`;

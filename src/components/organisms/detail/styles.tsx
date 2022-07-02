import styled from "styled-components";
import { device } from "../../../shared/size";

export const DetailWrapper = styled.div`
 .test{
 width: 222px;
}
.wrapper--name{
    column-gap: 50px;
    display: flex;
}
.title--style{
    font-size: 37px;
    padding-top: 40px;
    padding-bottom: 33px;
}

.size-button{
    display: flex;
    float: right;
    margin-top: 45px;
    column-gap: 13px;
}

.size--date{
    padding-top: 20px;
}

  @media ${device.laptopS} {
 .wrapper--name{
    display:block;
  }
  .size-button{
    float: none;
    justify-content: center;
    margin-top: 45px;
    column-gap: 13px;}
}
`;

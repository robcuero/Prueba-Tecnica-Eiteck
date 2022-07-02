import styled from "styled-components";
import { device } from "../../../shared/size";

export const TableWrapper = styled.div`


  padding-top: 1rem;
  padding-bottom: 1rem;
  table,
  th,
  td {
    border: #c6cbcf solid 1px;
    border-collapse: collapse;
    height: 2rem;
    background: white;
    padding: 0.5rem;
  }

  td {
    font-weight: 500;
  }

  td > img {
    object-fit: cover;
    height: 2rem;
    width: auto;
  }

  .input-icon {
    width: 20px;
    height: 20px;
  }
  .accion-size {
    display: flex;
    border: none;
    justify-content: center;
    column-gap: 1.563rem;
    cursor: pointer;
  }
  .table-size {
    width: 100%;
  }
  .align-title{
    text-align:center ;
  }

  .Imagen{
    text-align: center;
  }
  @media ${device.tablet} {
    .accion-size {
      float: right;
    }
  }
`;

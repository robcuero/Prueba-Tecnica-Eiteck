import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const ButtonWrapper = styled.div<ButtonProps>`
  .button-primary {
    border-radius: 0.25rem;
    width: 8.75rem;
    height: 3rem;
    border: none;
    ${({ variant }) => {
      switch (variant) {
        case 'danger':
          return css`
              background: #db4040;
              color: #ffffff;
          `
           case 'primary':
          return css`
               background: #1976d2;
               color: #ffffff;
          `
     
      }
    }}
 
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    cursor: pointer;
    img {
      height: 1.6rem;
    }
  }

  .button-primary:not(:disabled):hover {
    

    ${({ variant }) => {
      switch (variant) {
        case 'danger':
          return css`
          background-color: #db4040;
          `
           case 'primary':
          return css`
           background-color: ##5294d5;
          `
     
      }
    }}
  }

  .disabled {
    background: #c3c0e1;
  }

  .button-secudary {
    border-radius: 0.25rem;
    width: 8.75rem;
    height: 3rem;
    border: none;
    background: #000000;
    color: #ffffff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    cursor: pointer;
    img {
      height: 1.6rem;
    }
  }

  @media (min-width: 1200px) {
    max-width: 336px;
  }
`;

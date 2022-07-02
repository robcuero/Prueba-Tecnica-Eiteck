import React from "react";
import { SaveIcon } from "../../../assets/icons";
import { render,screen } from "@testing-library/react";
import {Buttons}  from ".";

const buttonMock = {
  isDisabled: true,
  message: "nombre"
};
describe("Button component", () => {
  it("Should render Button with props", () => {
    render(<Buttons isDisabled={buttonMock.isDisabled} message={buttonMock.message} icon={SaveIcon}/>);
    screen.getByText("nombre");
  });
});

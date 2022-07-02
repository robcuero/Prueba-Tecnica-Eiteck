import React from "react";
import {fireEvent, render,screen } from "@testing-library/react";
import {Input}  from ".";
import { Provider } from "react-redux";
import { store } from "../../../store";

const inputMock = {
  placeholder: "test",
  value: "test"
};
describe("Input component", () => {
  it("Should render Input with props",async () => {
    render(  <Provider store={store}><Input placeholder={inputMock.placeholder}  value={inputMock.value} /></Provider>);
    const input = screen.getByTestId("id-input");
    fireEvent.change(input, { target: { value: 'test' } })
  });
});

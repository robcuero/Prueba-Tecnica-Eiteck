import React from "react";
import { render } from "@testing-library/react";
import {Calendar}  from ".";
import { Provider } from "react-redux";
import { store } from "../../../store";


describe("Input component", () => {
  it("Should render Input with props",async () => {
    render(  <Provider store={store}><Calendar /></Provider>);
  });
});

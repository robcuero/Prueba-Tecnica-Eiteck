import React from "react";
import { render,screen } from "@testing-library/react";
import {Footer}  from ".";


describe("Button component", () => {
  it("Should render Button with props", () => {
    render(<Footer />);
   expect(screen.getByText("Copyright 2022 Eiteck")) 
  });
});

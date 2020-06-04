import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

const setUpComponent = (props = {}) => {
  const { container } = render(<Header {...props} />);
  return container;
};

describe("Header component", () => {
  let component;
  beforeEach(() => (component = setUpComponent()));

  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

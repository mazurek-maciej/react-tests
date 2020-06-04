import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

let wraper;

beforeEach(() => {
  wraper = shallow(<Header />);
});
describe("Header component", () => {
  it("should exist", () => {
    expect(wraper).toBeTruthy();
  });
  it("should contain logo name", () => {
    expect(wraper.find("p").text()).toBe("IT Diary");
  });
});

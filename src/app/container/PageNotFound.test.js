import React from "react";
import { shallow, render } from "../enzyme";
import PageNotFound from "./PageNotFound";

describe("test 404", () =>{
  test("render 404", () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper.exists()).toBe(true);
  });
});


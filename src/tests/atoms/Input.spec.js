import React from "react";
import { shallow } from "enzyme";
import { Input } from "../../components/atoms";

describe("Input.js", () => {
  it("Test render Input", () => {
    shallow(<Input />);
  });
});

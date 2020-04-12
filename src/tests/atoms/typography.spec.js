import React from "react";
import { shallow } from "enzyme";
import { Typography } from "../../components/atoms";

describe("typography.js", () => {
  it("Test render Typography", () => {
    shallow(<Typography />);
  });
});

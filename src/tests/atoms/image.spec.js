import React from "react";
import { shallow } from "enzyme";
import { Image } from "../../components/atoms";

describe("image.js", () => {
  it("Test render Image", () => {
    shallow(<Image />);
  });
});

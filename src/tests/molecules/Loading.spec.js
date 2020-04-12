import React from "react";
import { shallow } from "enzyme";
import { Loading } from "../../components/molecules";

describe("Loading.js", () => {
  it("Test render Loading", () => {
    shallow(<Loading />);
  });
});

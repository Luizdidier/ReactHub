import React from "react";
import { shallow } from "enzyme";
import { DataTableFooter } from "../../components/molecules";

describe("DataTableFooter.js", () => {
  it("Test render DataTableFooter", () => {
    shallow(<DataTableFooter />);
  });
});

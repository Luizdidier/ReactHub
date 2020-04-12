import React from "react";
import { shallow } from "enzyme";
import { ToolbarTable } from "../../components/molecules";

describe("ToolbarTable.js", () => {
  it("Test render ToolbarTable", () => {
    shallow(<ToolbarTable />);
  });
});

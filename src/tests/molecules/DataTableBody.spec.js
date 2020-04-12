import React from "react";
import { shallow } from "enzyme";
import { DataTableBody } from "../../components/molecules";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("DataTableBody.js", () => {
  it("Test render DataTableBody", () => {
    shallow(<DataTableBody />);
  });
});

import React from "react";
import { shallow } from "enzyme";
import { getGithubReducer } from "../../services/selectors";
import { DataTableHead } from "../../components/molecules";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../services/selectors");

describe("DataTableHead.js", () => {
  it("Test render DataTableHead", () => {
    getGithubReducer.mockReturnValue(false);
    shallow(<DataTableHead />);
  });
});

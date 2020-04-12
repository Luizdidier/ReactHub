import React from "react";
import { shallow } from "enzyme";
import { getGithubReducer } from "../../services/selectors";
import { DataTable } from "../../components/organisms";

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({
    profileUser: { name: "test" },
    profileUserError: false,
  }),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn().mockReturnValue({ username: "" }),
}));
jest.mock("../../services/selectors");

describe("DataTable.js", () => {
  it("Test render DataTable", () => {
    getGithubReducer.mockReturnValue(false);
    shallow(<DataTable />);
  });
});

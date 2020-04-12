import React from "react";
import { shallow } from "enzyme";
import { getUtilsReducer } from "../../services/selectors";
import { SearchLog } from "../../components/pages";

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

describe("SearchLog.js", () => {
  it("Test render SearchLog", () => {
    getUtilsReducer.mockReturnValue(false);
    shallow(<SearchLog />);
  });
});

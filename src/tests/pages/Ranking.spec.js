import React from "react";
import { shallow } from "enzyme";
import { getGithubReducer } from "../../services/selectors";
import { Ranking } from "../../components/pages";

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({ users: [] }),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn().mockReturnValue({ username: "" }),
}));
jest.mock("../../services/selectors");

describe("Ranking.js", () => {
  it("Test render Ranking", () => {
    getGithubReducer.mockReturnValue();
    shallow(<Ranking />);
  });
});

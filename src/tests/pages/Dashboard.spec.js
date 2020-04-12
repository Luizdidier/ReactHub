import React from "react";
import { shallow, mount } from "enzyme";
import { getGithubReducer } from "../../services/selectors";
import App from "../../App";
import { act } from "react-dom/test-utils";
import { Dashboard } from "../../components/pages";
import { DataTable } from "../../components/molecules";
// import { Loading } from "../components/atoms";
jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
jest.mock("../../services/selectors");

describe("Dashboard.js", () => {
  it("Test render Dashboard", () => {
    getGithubReducer.mockReturnValue(false);
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.matchesElement(DataTable)).toBe(true);
  });
});

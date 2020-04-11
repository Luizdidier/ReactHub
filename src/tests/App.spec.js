import React from "react";
import { shallow } from "enzyme";
import { getGithubReducer } from "../services/selectors";
import App from "../App";
import { Loading } from "../components/atoms";

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
}));
jest.mock("../services/selectors");

describe("App.js", () => {
  it("Test render App", () => {
    getGithubReducer.mockReturnValue(false);

    const wrapper = shallow(<App />);
    expect(wrapper.matchesElement(Loading)).toBe(true);
  });
});

import React from "react";
import { shallow } from "enzyme";
import { getUtilsReducer } from "../../services/selectors";
import { Navbar } from "../../components/molecules";

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({ tabIndex: 0 }),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../services/selectors");

describe("Navbar.js", () => {
  it("Test render Navbar", () => {
    getUtilsReducer.mockReturnValue(false);
    shallow(<Navbar />);
  });
});

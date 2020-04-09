import React from "react";
import { shallow } from "enzyme";
import App from "../Appp";

it("Test render App", () => {
  const app = shallow(<App />);
  expect(app).toStrictEqual(shallow(<App />));
});

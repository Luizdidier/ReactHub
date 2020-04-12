import React from "react";
import { shallow } from "enzyme";
import { CardPerfil } from "../../components/molecules";

describe("CardPerfil.js", () => {
  it("Test render CardPerfil", () => {
    shallow(<CardPerfil />);
  });
});

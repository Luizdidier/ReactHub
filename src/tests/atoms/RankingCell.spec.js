import React from "react";
import { shallow } from "enzyme";
import { RankingCell } from "../../components/atoms";

describe("RankingCell.js", () => {
  it("Test render RankingCell", () => {
    shallow(<RankingCell />);
  });
});

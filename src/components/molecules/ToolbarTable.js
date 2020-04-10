import React from "react";
import { Toolbar } from "@material-ui/core";
import { Typography } from "../atoms";
import styled from "styled-components";

export default function ToolbarTable({ text }) {
  return (
    <ToolbarStyled>
      <Typography variant="h6" text={text} />
    </ToolbarStyled>
  );
}

const ToolbarStyled = styled(Toolbar)`
  padding-left: 6px !important;
`;

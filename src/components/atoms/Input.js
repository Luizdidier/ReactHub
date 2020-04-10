import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

export default function Input(...props) {
  console.log(props);
  return <TextFieldStyled id="standard-required" {...props[0]} />;
}

const TextFieldStyled = styled(TextField)`
  width: ${(props) => (props.width ? props.width : "")};
`;

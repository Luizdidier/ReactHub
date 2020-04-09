import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

export default function Input({ width }) {
  return (
    <TextFieldStyled id="standard-required" label="Buscar" width={width} />
  );
}

const TextFieldStyled = styled(TextField)`
  width: ${(props) => (props.width ? props.width : "")};
`;

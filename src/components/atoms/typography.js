import React from "react";
import { Typography as Text } from "@material-ui/core";
import styled from "styled-components";

export default function Typography({ variant, text, margin }) {
  return (
    <TextStyled variant={variant} margin={margin}>
      {text}
    </TextStyled>
  );
}

const TextStyled = styled(Text)`
  ${(props) => (props.margin ? `margin: ${props.margin} !important}` : "")}
`;

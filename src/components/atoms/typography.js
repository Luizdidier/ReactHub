import React from "react";
import { Typography as Text } from "@material-ui/core";
import styled from "styled-components";

export default function Typography({ variant, text, margin, fontSize }) {
  return (
    <TextStyled variant={variant} margin={margin} fontSize={fontSize}>
      {text}
    </TextStyled>
  );
}

const TextStyled = styled(Text)`
  ${(props) => (props.margin ? `margin: ${props.margin} !important}` : "")}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")}
`;

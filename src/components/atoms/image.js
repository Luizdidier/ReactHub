import React from "react";
import styled from "styled-components";

export default function Image({ src, width, borderRadius }) {
  return (
    <ImgStyled
      src={src}
      alt={"react-logo"}
      width={width}
      borderRadius={borderRadius}
    />
  );
}

const ImgStyled = styled.img`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
`;

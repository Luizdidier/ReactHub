import React from "react";
import styled from "styled-components";

export default function Image({ src, width }) {
  return <ImgStyled src={src} alt={"react-logo"} width={width} />;
}

const ImgStyled = styled.img`
  width: ${(props) => props.width};
`;

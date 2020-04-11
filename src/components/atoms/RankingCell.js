import React from "react";
import { FaCrown } from "react-icons/fa";
import styled from "styled-components";
// import { Container } from './styles';

export default function RakingCell({ ranking }) {
  const render = (ranking) => {
    if (ranking === 1) return <FaCrownStyled color={"gold"} size="20" />;
    else if (ranking === 2) return <FaCrownStyled color={"silver"} size="20" />;
    else if (ranking === 3) return <FaCrownStyled color={"brown"} size="20" />;
  };

  return <>{render(ranking)}</>;
}

const FaCrownStyled = styled(FaCrown)`
  color: ${(props) => props.color};
`;

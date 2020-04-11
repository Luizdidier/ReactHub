import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";
import { Image } from "../atoms";

// import { Container } from './styles';

export default function Loading({ active }) {
  return (
    <ImageStyled active={active}>
      <Loader>
        <div className="l_main">
          <Image
            src={logo}
            width={"200px"}
            effect={"react-symbol-rotate-fast"}
          />
        </div>
      </Loader>
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  display: ${(props) => (props.active ? "display" : "none")};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 999;
`;

const Loader = styled.div`
  & {
    height: 100%;
    width: 100%;
  }
  & .l_main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 172px;
    height: 128px;
    margin: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media (max-width: 550px) {
    & {
      -webkit-transform: scale(0.75);
      transform: scale(0.75);
    }
  }
  @media (max-width: 440px) {
    & {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }
`;

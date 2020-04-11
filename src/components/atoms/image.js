import React from "react";
import styled from "styled-components";

export default function Image({
  src,
  width,
  borderRadius,
  effect,
  animateVelocity,
}) {
  return (
    <ImgStyled
      src={src}
      alt={"react-logo"}
      width={width}
      borderRadius={borderRadius}
      effect={effect}
      animateVelocity={animateVelocity}
    />
  );
}

const ImgStyled = styled.img`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  ${(props) =>
    props.effect === "react-symbol-rotate"
      ? `
      @media (prefers-reduced-motion: no-preference) { 
        & {
          animation: App-logo-spin infinite 8s linear;
        }
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      `
      : ""}
  ${(props) =>
    props.effect === "react-symbol-rotate-fast"
      ? `
          @media (prefers-reduced-motion: no-preference) { 
            & {
              animation: App-logo-spin infinite 1s linear;
            }
          }
    
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          `
      : ""}
`;

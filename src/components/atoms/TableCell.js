import React, { memo } from "react";
import { TableCell as CellTable } from "@material-ui/core";
import styled from "styled-components";

const TableCell = ({ children, width, component }) => {
  return (
    <>
      <CellTableStyled
        key={Math.random().toString()}
        width={width}
        component={component}
      >
        {children}
      </CellTableStyled>
    </>
  );
};

const CellTableStyled = styled(CellTable)`
  ${(props) => (props.width ? `width: ${props.width}` : "")}
`;

export default memo(TableCell);

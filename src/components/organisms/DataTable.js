import React from "react";
import { TableContainer, Table } from "@material-ui/core";
import {
  DataTableFooter,
  DataTableBody,
  ToolbarTable,
  DataTableHead,
} from "../molecules";
import styled from "styled-components";

export default function DataTable({
  totalCount,
  data,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  columns,
  rowValues,
  text,
  noPaginate,
  align,
}) {
  return (
    <>
      <ToolbarTable text={text} />
      <TableContainerStyled>
        <Table stickyHeader>
          <DataTableHead
            columns={columns}
            data={data}
            rowValues={rowValues}
            rowsPerPage={rowsPerPage}
            page={page}
            align={align}
          />
          <DataTableBody
            columns={columns}
            data={data}
            rowValues={rowValues}
            align={align}
          />
        </Table>
      </TableContainerStyled>
      {!noPaginate && (
        <DataTableFooter
          totalCount={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  );
}

const TableContainerStyled = styled(TableContainer)`
  max-height: 400px;
`;

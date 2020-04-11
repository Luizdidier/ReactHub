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
            rowsPerPage={rowsPerPage}
            page={page}
          />
          <DataTableBody data={data} rowValues={rowValues} />
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

import React from "react";
import { TableContainer, Table } from "@material-ui/core";
import { DataTableFooter, DataTableBody, ToolbarTable } from "../molecules";
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
}) {
  return (
    <>
      <ToolbarTable text={text} />
      <TableContainerStyled>
        <Table stickyHeader>
          <DataTableBody columns={columns} data={data} rowValues={rowValues} />
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

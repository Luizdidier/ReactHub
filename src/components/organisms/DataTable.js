import React from "react";
import { TableContainer, Table, TableCell } from "@material-ui/core";
import { DataTableFooter, DataTableBody } from "../molecules";
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
}) {
  return (
    <>
      <TableContainerStyled>
        <Table stickyHeader>
          <DataTableBody columns={columns} data={data} rowValues={rowValues} />
        </Table>
      </TableContainerStyled>
      <DataTableFooter
        totalCount={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}

const TableContainerStyled = styled(TableContainer)`
  max-height: 585px;
`;

const TableCellStyled = styled(TableCell)`
  width: 50%;
`;

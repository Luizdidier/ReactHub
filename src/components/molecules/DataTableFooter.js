import React from "react";
import {
  TableContainer,
  Table,
  TableFooter,
  TableRow,
  TablePagination,
} from "@material-ui/core";
import styled from "styled-components";

export default function DataTableFooter({
  totalCount,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <>
      <TableContainerStyled>
        <Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20, 30]}
                colSpan={3}
                count={totalCount || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainerStyled>
    </>
  );
}

const TableContainerStyled = styled(TableContainer)`
  border-top: 1px solid rgba(224, 224, 224, 1);
`;

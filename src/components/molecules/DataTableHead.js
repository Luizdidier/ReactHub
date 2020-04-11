import React, { memo, useState } from "react";
import { TableRow, TableHead, TableSortLabel } from "@material-ui/core";
import * as GithubActions from "../../store/modules/github/actions";
import { TableCell } from "../atoms";
import { useDispatch } from "react-redux";

const DataTableHead = ({ columns, page, rowsPerPage }) => {
  const [order, setOrder] = useState("desc");
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const sortHead = () => {
    setActive(!active);
    if (!active) {
      dispatch(
        GithubActions.getRepository(
          `stars:>0&page=${
            page + 1
          }&per_page=${rowsPerPage}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2&sort=updated&order=desc`
        )
      );
      setOrder("asc");
    } else {
      dispatch(
        GithubActions.getRepository(
          `stars:>0&page=${
            page + 1
          }&per_page=${rowsPerPage}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2&sort=updated&order=asc`
        )
      );
      setOrder("desc");
    }
  };

  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((value, index) => {
            if (value.sort)
              return (
                <TableCell key={Math.random() + index}>
                  <TableSortLabel
                    active={active}
                    direction={order}
                    onClick={() => sortHead()}
                  >
                    {value.sort}
                  </TableSortLabel>
                </TableCell>
              );
            else
              return <TableCell key={Math.random() + index}>{value}</TableCell>;
          })}
        </TableRow>
      </TableHead>
    </>
  );
};

export default memo(DataTableHead);

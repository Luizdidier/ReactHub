import React from "react";
import { TableRow, TableBody, TableHead } from "@material-ui/core";
import moment from "moment-timezone";
import { TableCell } from "~/components/atoms";

export default function DataTableBody({ columns, data, rowValues }) {
  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((value, index) => (
            <TableCell key={Math.random() + index} width={"50%"}>
              {value}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row, index) => (
          <TableRow key={Math.random()}>
            {rowValues.map((value, index) => (
              <TableCell
                component="th"
                key={Math.random() + index}
                width={"50%"}
              >
                {/* Todo: Validação de data ser por regex de timestamp */}
                {value?.includes("_at")
                  ? moment
                      .tz(row[value], "America/Fortaleza")
                      .format("DD/MM/YYYY HH:mm:ss")
                  : row[value]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}

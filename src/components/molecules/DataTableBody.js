import React from "react";
import { TableRow, TableBody, TableHead } from "@material-ui/core";
import moment from "moment-timezone";
import { TableCell, Image } from "../atoms";

export default function DataTableBody({ columns, data, rowValues }) {
  const valueType = (type, value) => {
    if (type.includes("_at"))
      return moment
        .tz(value, "America/Fortaleza")
        .format("DD/MM/YYYY HH:mm:ss");
    else if (type.includes("_url"))
      return <Image src={value} width={"70px"} borderRadius={"100%"} />;
    else return value;
  };

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
                width={"20%"}
              >
                {/* Todo: Validação de data ser por regex de timestamp */}
                {valueType(value, row[value])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}

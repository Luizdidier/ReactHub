import React, { memo, useState } from "react";
import { TableRow, TableBody, IconButton } from "@material-ui/core";
import moment from "moment-timezone";
import { TableCell, Image, RankingCell } from "../atoms";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DataTableBody = ({ columns, data, rowValues }) => {
  const navigate = useNavigate();
  const valueType = (type, value, login, index, row) => {
    const regexTime = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)Z$/g;
    if (regexTime.test(value))
      return moment
        .tz(value, "America/Fortaleza")
        .format("DD/MM/YYYY HH:mm:ss");
    else if (type.includes("avatar_url"))
      return <Image src={value} width={"70px"} borderRadius={"100%"} />;
    else if (type.includes("html_url")) {
      return (
        <IconButton
          aria-label="delete"
          onClick={() => {
            navigate(`/dashboard/ranking/${login}`);
          }}
        >
          <FaEye size={30} />
        </IconButton>
      );
    } else if (type.includes("ranking")) return <RankingCell ranking={index} />;
    else if (type.includes("array_value")) return row;
    else return value;
  };

  return (
    <>
      <TableBody>
        {data?.map((row, i) => (
          <TableRow key={Math.random()}>
            {rowValues.map((value, index) => (
              <TableCell component="th" key={Math.random() + index}>
                {valueType(value, row[value], row.login, i + 1, row)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default memo(DataTableBody);

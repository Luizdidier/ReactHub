import React, { memo } from "react";
import { TableRow, TableBody, TableHead, IconButton } from "@material-ui/core";
import moment from "moment-timezone";
import { TableCell, Image } from "../atoms";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DataTableBody = ({ columns, data, rowValues }) => {
  const navigate = useNavigate();
  const valueType = (type, value, login, index) => {
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
    } else if (type.includes("ranking")) return index;
    else return value;
  };

  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((value, index) => (
            <TableCell key={Math.random() + index}>{value}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row, i) => (
          <TableRow key={Math.random()}>
            {rowValues.map((value, index) => (
              <TableCell component="th" key={Math.random() + index}>
                {valueType(value, row[value], row.login, i + 1)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default memo(DataTableBody);

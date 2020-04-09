import React from "react";
import { Paper } from "@material-ui/core";
import { Typography } from "../atoms";

export default function Titlebar({ variant, text }) {
  return (
    <Paper>
      <Typography variant={variant} text={text} margin={"10px"} />
    </Paper>
  );
}

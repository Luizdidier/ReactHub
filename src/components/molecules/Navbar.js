import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { Image, Typography } from "~/components/atoms";
import logo from "~/logo.svg";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <AppBarStyled position="static">
        <Toolbar>
          <Grid
            justify="center"
            container
            alignItems={"center"}
            alignContent={"center"}
          >
            <Image src={logo} width={"4%"} />
            <Typography variant="h6" text={"ReactHub"} />
          </Grid>
        </Toolbar>
      </AppBarStyled>
    </>
  );
}

const AppBarStyled = styled(AppBar)`
  background: black !important;
`;

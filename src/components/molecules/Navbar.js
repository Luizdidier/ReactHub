import React, { useEffect } from "react";
import { AppBar, Toolbar, Grid, Tabs, Tab, Paper } from "@material-ui/core";
import { Image, Typography } from "../atoms";
import logo from "../../logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UtilsActions from "../../store/modules/utils/actions";

export default function Navbar() {
  const navigate = useNavigate();
  const { tabIndex } = useSelector((state) => state.utilsReducer);
  const dispatch = useDispatch();

  const handleChange = async (event, newValue) => {
    await dispatch(UtilsActions.setValueTabs(newValue));
    if (newValue === 0) navigate("/");
    else if (newValue === 1) navigate("/dashboard/ranking");
    else if (newValue === 2) navigate("/search/log");
  };

  useEffect(() => {
    if (tabIndex) dispatch(UtilsActions.setValueTabs(tabIndex));
  }, [dispatch, tabIndex]);

  return (
    <>
      <AppBarStyled position="static">
        <Toolbar>
          <Grid
            justify="center"
            container
            alignItems={"center"}
            alignContent={"center"}
            spacing={3}
          >
            <Image src={logo} width={"60px"} effect={"react-symbol-rotate"} />
            <Typography variant="h6" text={"ReactHub"} margin={"10px"} />
          </Grid>
        </Toolbar>
      </AppBarStyled>
      <Grid>
        <PaperStyled square>
          <Tabs
            value={tabIndex || 0}
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Home" />
            <Tab label="Ranking" />
            <Tab label="Ultimas Buscas" />
          </Tabs>
        </PaperStyled>
      </Grid>
    </>
  );
}

const AppBarStyled = styled(AppBar)`
  background: black !important;
`;

const PaperStyled = styled(Paper)`
  display: flex;
  justify-content: center;
`;

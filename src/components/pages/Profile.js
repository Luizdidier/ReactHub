import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CardPerfil } from "../molecules";
import { useDispatch, useSelector } from "react-redux";
import * as GithubActions from "../../store/modules/github/actions";

export default function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { profileUser } = useSelector((state) => state.githubReducer);

  useEffect(() => {
    if (username) dispatch(GithubActions.getSingleUser(`${username}`));
  }, [dispatch, username]);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Grid container justify="center">
            <GridStyled item>
              <CardPerfil profileUser={profileUser} />
            </GridStyled>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const GridStyled = styled(Grid)`
  padding: 34px;
`;

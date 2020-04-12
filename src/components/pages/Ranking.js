import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as GithubActions from "../../store/modules/github/actions";
import { getGithubReducer } from "../../services/selectors";
import { Navbar } from "../molecules";
import { DataTable } from "../organisms";

export default function Ranking() {
  const dispatch = useDispatch();
  const [pageUser] = useState(0);
  const [rowsPerPageUser] = useState(5);
  const { users } = useSelector(getGithubReducer);

  // Todo: Reactory do client_id e do client_secret

  useEffect(() => {
    dispatch(
      GithubActions.getUser(
        `type:user&page=${pageUser + 1}&per_page=${rowsPerPageUser}&client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&client_secret=${
          process.env.REACT_APP_CLIENT_SECRET
        }&sort=followers&order=desc`
      )
    );
  }, [dispatch, pageUser, rowsPerPageUser]);

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid container justify="center">
          <GridItemStyled item xs={12} md={6}>
            <Paper>
              <DataTable
                text={"Usuários com mais seguidores"}
                data={users.items}
                columns={["#", "Perfil", "Foto", "Nome"]}
                rowValues={["ranking", "html_url", "avatar_url", "login"]}
                noPaginate={true}
              />
            </Paper>
          </GridItemStyled>
        </Grid>
      </Grid>
    </>
  );
}

const GridItemStyled = styled(Grid)`
  padding: 34px;
  width: 45%;
`;

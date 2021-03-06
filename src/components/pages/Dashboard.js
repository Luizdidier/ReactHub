import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as GithubActions from "../../store/modules/github/actions";
import * as UtilsActions from "../../store/modules/utils/actions";
import { Outlet } from "react-router-dom";
import { Navbar, FormSearch } from "../molecules";
import { DataTable } from "../organisms";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getGithubReducer } from "../../services/selectors";

const validationSchemaUser = Yup.object({
  searchUser: Yup.string().required("Required"),
});

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValuesUser = {
    searchUser: "",
  };
  const [pageRepository, setPageRepository] = useState(0);
  const [rowsPerPageRepository, setRowsPerPageRepository] = useState(10);
  const { repository } = useSelector(getGithubReducer);

  const handleChangePageRepository = (event, newPage) => {
    setPageRepository(newPage);
  };

  const handleChangeRowsPerPageRepository = (event) => {
    setRowsPerPageRepository(parseInt(event.target.value, 10));
    setPageRepository(0);
  };

  // Todo: Reactory do client_id e do client_secret

  useEffect(() => {
    dispatch(
      GithubActions.getRepository(
        `stars:>0&page=${
          pageRepository + 1
        }&per_page=${rowsPerPageRepository}&client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&order=desc`
      )
    );
  }, [dispatch, pageRepository, rowsPerPageRepository]);

  const handleSubmit = (e, actions) => {
    if (e.searchUser) {
      dispatch(UtilsActions.setSearchLog(e.searchUser));
      navigate(`/${e.searchUser}`);
    }
  };

  return (
    <>
      <Navbar />
      <LineSpace />
      <Outlet />
      <Grid container>
        <Grid container justify="center">
          <GridItemStyled item xs={12} md={6}>
            <FormSearch
              initialValues={initialValuesUser}
              handleSubmit={handleSubmit}
              name={"searchUser"}
              placeholder={"Buscar Usuários"}
              validationSchema={validationSchemaUser}
            />
            <LineSpace />
            <Paper>
              <DataTable
                text={"Lista Repositórios"}
                data={repository.items}
                page={pageRepository}
                rowsPerPage={rowsPerPageRepository}
                handleChangePage={handleChangePageRepository}
                handleChangeRowsPerPage={handleChangeRowsPerPageRepository}
                totalCount={repository.total_count}
                columns={[
                  "Nome",
                  "Linguagem",
                  "Stars",
                  { sort: "Ultima Atualização" },
                ]}
                rowValues={[
                  "name",
                  "language",
                  "stargazers_count",
                  "updated_at",
                ]}
              />
            </Paper>
          </GridItemStyled>
        </Grid>
      </Grid>
    </>
  );
}

const LineSpace = styled.div`
  width: 100%;
  height: 20px;
`;

const GridItemStyled = styled(Grid)`
  padding: 34px;
  width: 45%;
`;

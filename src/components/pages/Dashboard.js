import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as GithubActions from "../../store/modules/github/actions";
import { Outlet } from "react-router-dom";
import { Navbar, FormSearch } from "../molecules";
import { DataTable } from "../organisms";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchemaUser = Yup.object({
  searchUser: Yup.string().required("Required"),
});

const validationSchemaRepository = Yup.object({
  searchRepository: Yup.string().required("Required"),
});

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValuesUser = {
    searchUser: "",
  };
  const initialValuesRepository = {
    searchRepository: "",
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { users, repository } = useSelector((state) => state.githubReducer);

  useEffect(() => {}, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Todo: Reactory do client_id e do client_secret

  useEffect(() => {
    dispatch(
      GithubActions.getRepository(
        `stars:>0&page=${
          page + 1
        }&per_page=${rowsPerPage}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2&order=desc`
      )
    );
  }, [dispatch, page, rowsPerPage]);

  useEffect(() => {
    dispatch(
      GithubActions.getUser(
        `type:user&per_page=${rowsPerPage}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2&order=desc`
      )
    );
  }, [dispatch, rowsPerPage]);

  const handleSubmit = (e, actions) => {
    console.log(e);
    if (e.searchUser) navigate(`/profile/${e.searchUser}`);
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
              {/* Todo: Colocar paginação nos usuarios, depois ver como ordenar por mais ativos */}
              <DataTable
                text={"Usuários"}
                data={users.items}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                totalCount={users.total_count}
                columns={["Photo", "Nome", "Ultima Atualização"]}
                rowValues={["avatar_url", "login", "updated_at"]}
              />
            </Paper>
          </GridItemStyled>
          <GridItemStyled item xs={12} md={6}>
            <FormSearch
              initialValues={initialValuesRepository}
              handleSubmit={handleSubmit}
              validationSchema={validationSchemaRepository}
              name={"searchRepository"}
              placeholder={"Buscar Repositorios"}
            />

            <LineSpace />
            <Paper>
              <DataTable
                text={"Repositórios"}
                data={repository.items}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                totalCount={repository.total_count}
                columns={["Nome", "Stars", "Ultima Atualização"]}
                rowValues={["name", "stargazers_count", "updated_at"]}
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

const ButtonNoCss = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

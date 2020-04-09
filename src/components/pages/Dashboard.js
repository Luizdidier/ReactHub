import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as GithubActions from "~/store/modules/github/actions";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Titlebar } from "~/components/molecules";
import { DataTable } from "~/components/organisms";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { users, repository } = useSelector((state) => state.githubReducer);

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
        }&per_page=${rowsPerPage}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2`
      )
    );
  }, [dispatch, page, rowsPerPage]);

  useEffect(() => {
    dispatch(
      GithubActions.getUser(
        `type:user&per_page=${rowsPerPage}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2`
      )
    );
  }, [dispatch, rowsPerPage]);

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item style={{ width: "80%" }}>
              <Titlebar variant={"h5"} text={"Usuários"} />
              <br />
              <Paper>
                <DataTable
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item style={{ width: "80%" }}>
              <Titlebar variant={"h5"} text={"Repositórios"} />
              <br />
              <Paper>
                <DataTable
                  data={repository.items}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  totalCount={repository.total_count}
                  columns={["Nome", "Ultima Atualização"]}
                  rowValues={["name", "updated_at"]}
                />
              </Paper>
            </Grid>
            {/* <Grid item>
              <Paper>
                <DataTable
                  data={repository.items}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  totalCount={repository.total_count}
                  columns={["Nome", "Ultima Atualização"]}
                  rowValues={["name", "updated_at"]}
                />
              </Paper>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}

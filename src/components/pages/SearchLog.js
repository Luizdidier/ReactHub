import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../molecules";
import { DataTable } from "../organisms";

export default function SearchLog() {
  const dispatch = useDispatch();
  const { searchLog } = useSelector((state) => state.utilsReducer);
  // Todo: Reactory do client_id e do client_secret

  //   useEffect(() => {
  //     dispatch(
  //       GithubActions.getRepository(
  //         `stars:>0&page=${
  //           pageRepository + 1
  //         }&per_page=${rowsPerPageRepository}&client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2&order=desc`
  //       )
  //     );
  //   }, [dispatch, pageRepository, rowsPerPageRepository]);

  useEffect(() => {
    console.log(searchLog.length);
    if (searchLog?.length > 5) {
      const lastValue = searchLog.pop();
    }
  }, [searchLog]);

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid container justify="center">
          <GridItemStyled item xs={12} md={3}>
            <Paper>
              <DataTable
                text={"Ultimas buscas"}
                data={searchLog}
                columns={["Descrição"]}
                rowValues={["array_value"]}
                noPaginate={true}
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

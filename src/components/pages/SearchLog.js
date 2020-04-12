import React from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Navbar } from "../molecules";
import { DataTable } from "../organisms";
import { getUtilsReducer } from "../../services/selectors";

export default function SearchLog() {
  const { searchLog } = useSelector(getUtilsReducer);

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

const GridItemStyled = styled(Grid)`
  padding: 34px;
  width: 45%;
`;

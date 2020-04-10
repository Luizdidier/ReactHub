import React from "react";
import { Card, CardContent, Grid, Button } from "@material-ui/core";
import { Typography, Image } from "../atoms";
import styled from "styled-components";
import moment from "moment-timezone";

export default function CardPerfil({ profileUser }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container direction="row" alignItems="flex-start">
          <Grid item md={3}>
            <LineSpace height={"35px"} />
            <Image
              src={profileUser?.avatar_url}
              width={"80%"}
              borderRadius={"100%"}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item container direction="column" spacing={2}>
              <Grid item xs>
                <LineSpace height={"20px"} />
                <Typography
                  text={profileUser?.name || profileUser?.login}
                  gutterBottom
                  variant="h4"
                />
                <Typography
                  text={`Seguidores: ${profileUser?.followers}`}
                  gutterBottom
                  fontSize="17px"
                />
                <LineSpace />
                <Typography
                  text={`Repositorios Publicos: ${profileUser?.public_repos}`}
                  gutterBottom
                  fontSize="17px"
                />
                <LineSpace />
                <Typography
                  text={`Membro Desde: ${moment
                    .tz(profileUser?.created_at, "America/Fortaleza")
                    .format("DD/MM/YYYY ")}`}
                  gutterBottom
                  fontSize="17px"
                />
                <LineSpace height="10px" />
                <Button
                  href={profileUser?.html_url}
                  target="_blank"
                  variant="contained"
                >
                  Repositorio
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const LineSpace = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "5px")};
`;

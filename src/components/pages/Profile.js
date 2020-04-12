import React, { useEffect, memo } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CardPerfil } from "../molecules";
import { useDispatch, useSelector } from "react-redux";
import { getGithubReducer } from "../../services/selectors";
import * as GithubActions from "../../store/modules/github/actions";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const dispatch = useDispatch();
  const { profileUser, profileUserError } = useSelector(getGithubReducer);

  useEffect(() => {
    if (!_.isEmpty(profileUserError)) {
      const { response } = profileUserError;

      if (response?.status === 404)
        Swal.fire({
          title: "Error !",
          text: "Usuário não encontrado",
          icon: "error",
          confirmButtonText: "Cool",
        });
      else
        Swal.fire({
          title: "Error !",
          text: "Error Inesperado",
          icon: "error",
          confirmButtonText: "Cool",
        });
      navigate("/");
      dispatch(GithubActions.clear());
    }
  }, [dispatch, navigate, profileUserError]);

  useEffect(() => {
    async function getSingleUser() {
      dispatch(
        GithubActions.getSingleUser(
          `${username}?q=client_id=61aaa5c3f1e95c95abb5&client_secret=0e910de58a541232ef4ece41396689bb973f81e2`
        )
      );
    }
    getSingleUser();
  }, [dispatch, username]);

  return (
    <>
      {!_.isEmpty(profileUser) && (
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container justify="center">
              <GridStyled item>
                <CardPerfil profileUser={profileUser} />
              </GridStyled>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

const GridStyled = styled(Grid)`
  padding: 34px;
`;

export default memo(Profile);

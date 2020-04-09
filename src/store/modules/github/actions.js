export function getUser(username) {
  return {
    type: "@githubReducer/GET_USER",
    payload: username,
  };
}
export function getUserSucesso(response) {
  return {
    type: "@githubReducer/GET_USER_SUCESSO",
    payload: response,
  };
}
export function getUserFalha(err) {
  return {
    type: "@githubReducer/GET_USER_FALHA",
    payload: err,
  };
}

export function getRepository(params) {
  return {
    type: "@githubReducer/GET_REPOSITORY",
    payload: params,
  };
}
export function getRepositorySucesso(response) {
  return {
    type: "@githubReducer/GET_REPOSITORY_SUCESSO",
    payload: response,
  };
}
export function getRepositoryFalha(err) {
  return {
    type: "@githubReducer/GET_REPOSITORY_FALHA",
    payload: err,
  };
}

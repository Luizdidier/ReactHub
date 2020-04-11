import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  users: [],
  repository: [],
  profileUser: [],
  usersError: [],
  repositoryError: [],
  profileUserError: [],
  tabIndex: 0,
};

export default function githubReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@githubReducer/GET_USER": {
        draft.loading = true;
        break;
      }
      case "@githubReducer/GET_USER_SUCESSO": {
        draft.loading = false;
        draft.users = action.payload;
        break;
      }
      case "@githubReducer/GET_USER_FALHA": {
        draft.loading = false;
        draft.usersError = action.payload;
        break;
      }
      case "@githubReducer/GET_SINGLE_USER": {
        draft.loading = true;
        break;
      }
      case "@githubReducer/GET_SINGLE_USER_SUCESSO": {
        draft.loading = false;
        draft.profileUser = action.payload;
        break;
      }
      case "@githubReducer/GET_SINGLE_USER_FALHA": {
        draft.loading = false;
        draft.profileUserError = action.payload;
        break;
      }
      case "@githubReducer/GET_REPOSITORY": {
        draft.loading = true;
        break;
      }
      case "@githubReducer/GET_REPOSITORY_SUCESSO": {
        draft.loading = false;
        draft.repository = action.payload;
        break;
      }
      case "@githubReducer/GET_REPOSITORY_FALHA": {
        draft.loading = false;
        draft.repositoryError = action.payload;
        break;
      }
      case "@githubReducer/SET_VALUE_TABS": {
        draft.tabIndex = action.payload;
        break;
      }
      case "@githubReducer/CLEAR": {
        draft.profileUser = [];
        draft.loading = false;
        draft.usersError = [];
        draft.repositoryError = [];
        draft.profileUserError = [];
        break;
      }
      default:
        return state;
    }
  });
}

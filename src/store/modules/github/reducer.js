import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  users: [],
  repository: [],
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
        draft.users = action.payload;
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
        draft.repository = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}

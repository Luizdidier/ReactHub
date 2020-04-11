import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  tabIndex: 0,
  searchLog: [],
};

export default function utilsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@utilsReducer/SET_VALUE_TABS": {
        draft.loading = false;
        draft.tabIndex = action.payload;
        break;
      }
      case "@utilsReducer/SET_SEARCH_LOG": {
        draft.loading = false;
        if (draft.searchLog?.length >= 5) {
          draft.searchLog.pop();
        }
        draft.searchLog = [action.payload, ...draft.searchLog];
        break;
      }
      default:
        return state;
    }
  });
}

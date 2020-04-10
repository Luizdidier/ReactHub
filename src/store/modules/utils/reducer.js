import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  tabIndex: 0,
};

export default function utilsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@utilsReducer/SET_VALUE_TABS": {
        draft.loading = false;
        draft.tabIndex = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}

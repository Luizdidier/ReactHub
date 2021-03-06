import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "site",
      storage,
      whitelist: ["githubReducer", "utilsReducer"],
    },
    reducers
  );
  return persistedReducer;
};

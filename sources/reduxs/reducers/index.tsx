import { combineReducers } from "redux";
import auth from "./auth";
import issue from "./issue";
export const rootReducer = combineReducers({
  auth,
  issue,
});

export type RootState = ReturnType<typeof rootReducer>;

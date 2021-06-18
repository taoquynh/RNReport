import { UPDATE_ISSUES_STORE } from "../actions/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { Issue } from "../../models/Issue";

export interface ListIssue {
  data: Issue[];
}

const initState: ListIssue = {
    data: []
}

const issueReducer = (state: ListIssue = initState, action: PayloadAction<[]>) => {
  switch (action.type) {
    case UPDATE_ISSUES_STORE:
      return updateDataIssue(action, state);
    default:
      return state;
  }
};

const updateDataIssue = (action: PayloadAction<[]>, state: ListIssue) => {
  console.log(action.payload)
  return {
    ...state,
    data: action.payload,
  };
};

export default issueReducer;

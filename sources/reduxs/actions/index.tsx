import { Issue } from "../../models/Issue";
import { User } from "../../models/User";
import { ListIssue } from "../reducers/issue";
import {
  GET_ISSUES,
  GET_USER,
  LOGIN,
  LOGIN_FALSE,
  REGISTER,
  UPDATE_ISSUES_STORE,
} from "./types";

export const loginAction = (phone: string, password: string) => ({
  type: LOGIN,
  payload: {
    phone,
    password,
  },
});

export const loginFalse = (error: string) => ({
  type: LOGIN_FALSE,
  payload: error,
});

export const register = (
  username: string,
  phone: string,
  password: string
) => ({
  type: REGISTER,
  payload: {
    username,
    phone,
    password,
  },
});

export const getIssuesAction = () => ({
  type: GET_ISSUES,
});

export const updateIssueStoreAction = (payload: Issue[]) => ({
  type: UPDATE_ISSUES_STORE,
  payload,
});

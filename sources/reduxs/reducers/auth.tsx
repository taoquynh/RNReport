import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { LOGIN } from "../actions/type";

const initState = {
  
}
const loginFalse = (state = initState, action: PayloadAction<string>) => ({
  ...state,
  error: action.payload,
})

const initUser: User = {
  id: '',
  createdAt: '',
  createdBy: '',
  modifiedAt: '',
  modifiedBy: '',
  name: '',
  dateOfBirth: '',
  address: '',
  gender: false,
  phoneNumber: '',
  email: '',
  avatar: '',
  token: '',
}

const getUser = (state = initUser, action: User) => ({
  ...state,
  user: action
})

export default loginFalse;

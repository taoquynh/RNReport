import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { LOGIN } from "../actions/type";

const initState: User = {
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
const authReducer = (state = initState, action: PayloadAction<{phone: string, password: string}, string>) => {
  return state
};

export default authReducer;

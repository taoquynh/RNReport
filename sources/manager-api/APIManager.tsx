import { Result, User } from "../models/User";
import * as APIName from "./APIName";

export async function apiManagerLogin(phone: string, password: string) {
  
  const formData = new FormData();
  formData.append("PhoneNumber", phone);
  formData.append("Password", password);

  const response = await fetch(APIName.returnUrl(APIName.login), {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data
}

import * as APIName from "./APIName";
import axios from "axios";
import storageService from "../services";

export async function apiManagerLogin(phone: string, password: string) {
  const formData = new FormData();
  formData.append("PhoneNumber", phone);
  formData.append("Password", password);

  const response = await fetch(APIName.returnUrl(APIName.login), {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data;
}

// CUSTOM AXIOS
const client = axios.create({
  baseURL: APIName.domain,
  timeout: 30000,
});

export function apiManagerListIssues() {
  // client.defaults.headers.common["Authorization"] =
  //   "Bearer " + storageService.getAPIToken();


  return client
    .get(APIName.getListIssues)
    .then(function (response) {
      const res = response.data
      return res
    })
    .catch(function (error) {
      console.log(error);
    });
}

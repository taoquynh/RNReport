import { Result, User } from "../models/User";
import * as APIName from "./APIName";

export async function apiManagerLogin(phone:string, password: String) {
    console.log('INFO: ', phone, password)
    const response = await fetch(
        APIName.returnUrl(APIName.login), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                PhoneNumber: "0168326697",
                Password: "123456"
            })
        }
    )

    const data = await response.json();
    // const newData: Result = JSON.parse(data);

    console.log(response.url)
    console.log(response.status)
    console.log(data)
    // if (newData.code === 0) {
    //     console.log("TOKEN: ", newData.data.token)
    // } else {
    //     console.log("Error: ", newData.message)
    // }
}

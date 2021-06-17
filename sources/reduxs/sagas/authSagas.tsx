import { CommonActions } from "@react-navigation/routers";
import { call, takeEvery } from "redux-saga/effects";
import { apiManagerLogin } from "../../manager-api/APIManager";
import { navigate } from "../../navigators/navigationService";
import { storageService } from "../../services";
import { LOGIN } from "../actions/type";

async function storeToken(token: string) {
  try {
    await storageService.setItem("TOKEN", token);
  } catch (error) {
    console.log("Asyncstorage error during token store:", error);
  }
}
function* loginCall(action: any): any {
  console.log("LOGIN");
  console.log("Action", action);
  const { phone, password } = action.payload;
  console.log(phone, password);
  try {
    const res = yield call(apiManagerLogin, phone, password);
    console.log(`SUCCESS:`, res);

    if (res.code === 0) {
      const token = res.data.token;
      yield call(storeToken, token)
      console.log("TOKEN: ", res.data.token);
    //   yield CommonActions.navigate({name: 'Issue', params: data})
    const data = res.data;
    navigate('Issue', {data})
    } else {
      console.log("Error: ", res.message);
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

function* AuthSaga() {
  yield takeEvery(LOGIN, loginCall);
}

export default AuthSaga;

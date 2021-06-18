import { call, takeEvery } from "redux-saga/effects";
import { apiManagerLogin } from "../../manager-apis/APIManager";
import { navigate } from "../../navigators/navigationService";
import { storageService } from "../../services";
import { LOGIN } from "../actions/types";

async function storeToken(token: string) {
  try {
    await storageService.setItem("TOKEN", token);
  } catch (error) {
    console.log("Asyncstorage error during token store:", error);
  }
}

function* loginCall(action: any): any {
  const { phone, password } = action.payload;
  try {
    const res = yield call(apiManagerLogin, phone, password);

    if (res.code === 0) {
      const token = res.data.token;
      yield call(storeToken, token);
      console.log("TOKEN: ", res.data.token);
      const data = res.data;
      navigate("Issue", { data });
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

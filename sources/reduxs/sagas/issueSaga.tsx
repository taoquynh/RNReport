import { call, put, takeEvery } from "redux-saga/effects";
import { apiManagerListIssues } from "../../manager-apis/APIManager";
import { Issue } from "../../models/Issue";
import { updateIssueStoreAction } from "../actions";
import { GET_ISSUES, LOGIN } from "../actions/types";

function* listIssueCall(action: any): any {
  try {
    const res = yield call(apiManagerListIssues);
    if (res.code === 0) {
      const data = res.data;
      yield put(updateIssueStoreAction(data));
      // console.log(data)
    } else {
      console.log("Error: ", res.message);
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

function* IssueSaga() {
  yield takeEvery(GET_ISSUES, listIssueCall);
}

export default IssueSaga;

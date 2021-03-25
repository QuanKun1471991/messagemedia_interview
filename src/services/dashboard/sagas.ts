import { all, call, put, takeLatest } from "redux-saga/effects";
import dashboardServices from "services/dashboard/api";
import { get } from "lodash";
import { fetchImagesFailedAction, fetchImagesSuccessAction } from "./actions";
import { DashboardActions } from "./types";

export function* fetchImages(params) {
  const { payload } = params;
  try {
    const {
      data: { data },
    } = yield call(dashboardServices.fetchImages, payload);

    yield put(fetchImagesSuccessAction({ data }));
  } catch (e) {
    yield put(fetchImagesFailedAction({ error: get(e, "data.message") }));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(DashboardActions.FETCH_IMAGES, fetchImages)]);
}

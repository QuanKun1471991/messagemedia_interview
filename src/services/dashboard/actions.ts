import {
  FetchImagesAction,
  FetchImagesFailedAction,
  FetchImagesSuccessAction,
  DashboardActions,
} from "./types";

export function fetchImagesAction(payload: any): FetchImagesAction {
  return {
    type: DashboardActions.FETCH_IMAGES,
    payload,
  };
}

export function fetchImagesSuccessAction(payload): FetchImagesSuccessAction {
  return {
    type: DashboardActions.FETCH_IMAGES_SUCCESS,
    payload,
  };
}

export function fetchImagesFailedAction(payload: any): FetchImagesFailedAction {
  return {
    type: DashboardActions.FETCH_IMAGES_FAILED,
    payload,
  };
}

export interface IDashboardState {
  images: {
    loading: boolean;
    error: string | null;
    data: [];
    total: number;
    limit: number;
    offset: number;
  };
}

export interface imagesDataProps {
  id: string;
  url: string;
  userName: string;
  avatarUrl: string;
  title: string;
  profileUrl: string;
}

export interface FetchImagesParams {
  limit: number;
  offset: number;
}

export enum DashboardActions {
  FETCH_IMAGES = "[images] fetch all",
  FETCH_IMAGES_SUCCESS = "[images] fetch success",
  FETCH_IMAGES_FAILED = "[images] fetch failed",
}

export interface FetchImagesAction {
  type: DashboardActions.FETCH_IMAGES;
  payload: FetchImagesParams;
}
export interface FetchImagesSuccessAction {
  type: DashboardActions.FETCH_IMAGES_SUCCESS;
  payload: {
    data: [];
    pagination: {
      total: number;
      limit: number;
      offset: number;
    };
  };
}

export interface FetchImagesFailedAction {
  type: DashboardActions.FETCH_IMAGES_FAILED;
  payload: { error: string };
}

export type DashboardActionTypes =
  | FetchImagesAction
  | FetchImagesSuccessAction
  | FetchImagesFailedAction;

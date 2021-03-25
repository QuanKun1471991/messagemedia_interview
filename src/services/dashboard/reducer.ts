import produce from "immer";
import { Reducer } from "redux";
import {
  DashboardActions,
  DashboardActionTypes,
  IDashboardState,
} from "./types";

export const initialState: IDashboardState = {
  images: {
    loading: false,
    error: "",
    data: [],
    total: 0,
    limit: 0,
    offset: 0,
  },
};

const dashboardReducer: Reducer<IDashboardState, DashboardActionTypes> = (
  state = initialState,
  action
) => {
  return produce<IDashboardState>(state, (draft) => {
    switch (action.type) {
      case DashboardActions.FETCH_IMAGES: {
        draft.images.error = null;
        draft.images.loading = true;

        return draft;
      }
      case DashboardActions.FETCH_IMAGES_SUCCESS: {
        const { data } = action.payload;
        draft.images.loading = false;
        draft.images.data = data;

        return draft;
      }
      case DashboardActions.FETCH_IMAGES_FAILED: {
        const { error } = action.payload;

        draft.images.loading = false;
        draft.images.error = error;
        return draft;
      }
    }
  });
};

export default dashboardReducer;

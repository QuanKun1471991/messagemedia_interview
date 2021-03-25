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
    limit: 20,
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
        const { data, pagination } = action.payload;
        draft.images.loading = false;
        draft.images.data = [...draft.images.data, ...data];
        draft.images.total = pagination.total;
        draft.images.limit = pagination.limit;
        draft.images.offset = pagination.offset + pagination.limit;

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

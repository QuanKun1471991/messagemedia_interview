import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dashboard from "./dashboard/reducer";

export default (history: any) => {
  return combineReducers({
    router: connectRouter(history),
    dashboard,
  });
};

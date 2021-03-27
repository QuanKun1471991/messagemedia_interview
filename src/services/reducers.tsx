import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dashboard from "./dashboard/reducer";

export const Index = (history: any) => {
  return combineReducers({
    router: connectRouter(history),
    dashboard,
  });
};

export default Index;

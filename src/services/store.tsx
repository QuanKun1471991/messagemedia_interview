import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reducers from "./reducers";
import { logger } from "redux-logger";
import sagas from "./sagas";

export const index = () => {
  const history = createHashHistory();
  const routeMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routeMiddleware];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  const store = createStore(
    reducers(history),
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);

  return store;
};

export default index;

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { makeRoute, privateRoutes, publicRoutes } from "./core/contants/routes";
import { Suspense, useMemo } from "react";
import Loading from "./components/loader";
import React from "react";
import "antd/dist/antd.css";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reducers from "./services/reducers";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import sagas from "services/sagas";

const App = () => {
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

  const createRoutes = useMemo(() => {
    return (
      <>
        <Switch>
          {privateRoutes.map(makeRoute)}
          {publicRoutes.map(makeRoute)}
        </Switch>
      </>
    );
  }, []);

  return (
    <>
      <Router>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>{createRoutes}</Suspense>
        </Provider>
      </Router>
    </>
  );
};

export default App;

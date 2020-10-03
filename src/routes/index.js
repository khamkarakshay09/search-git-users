import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const Routes = () => (
  <>
    {routes.map((route, index) => (
      <Route
        component={route.component}
        exact={route.exact}
        path={route.path}
        key={index}
      />
    ))}
  </>
);

function AppRoutes() {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default AppRoutes;

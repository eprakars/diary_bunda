import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import GlobalStyle from './global-styles';
import Homepage from './containers/Homepage';
import Item from './containers/Item';

const routes = [
  {
    path: "/home",
    component: Homepage,
    exact: true,
  },
  {
    path: "/item",
    component: Item,
    exact: true,
  }
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" /> {/* Temporary */}
        </Route>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={`route-${i}`} {...route} />
        ))}
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;

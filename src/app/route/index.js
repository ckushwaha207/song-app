import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//  components
import PageNotFound from '../container/PageNotFound';
import Home from '../container/index';

/**
 * This component is the placeholder for the below routes and their corresponding components:
 * <ol>
 *  <li>Home: '/'</li>
 *  <li>Users: '/search'</li>
 *  <li>PageNotFound: fallback component</li>
 * </ol>
 */
export default function appRoute() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Users />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
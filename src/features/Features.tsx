import { Switch, Route, Redirect } from "react-router";

import { Users } from "./Users";

export const Features = () => (
  <Switch>
    <Route path="/users/:userId?" component={Users} />
    <Redirect to="/users" />
  </Switch>
);

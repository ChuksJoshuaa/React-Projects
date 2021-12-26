import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" exact>
        <Movie />
      </Route>
    </Switch>
  );
}

export default App;

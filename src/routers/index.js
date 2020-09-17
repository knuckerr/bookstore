import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../compoments/Home";
import Add from "../compoments/Add";
import View from "../compoments/View";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={Add} />
        <Route path="/book/:id" exact component={View} />
      </Switch>
    </BrowserRouter>
  );
}


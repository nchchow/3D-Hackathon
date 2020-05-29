import React from "react";
import Preview from "./components/Preview";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/preview" component={Preview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

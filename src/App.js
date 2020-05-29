import React from "react";
import Preview from "./components/Preview";
import { Route } from "react-router-dom";
// import RouterBrowser from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact />
        {/* <Route path="/monica" component={} /> */}
      </div>
    </Router>
  );
}

export default App;

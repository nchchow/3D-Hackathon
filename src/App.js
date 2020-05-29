import React from "react";
import Preview from "./components/Preview";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>map goes here?</div>

      <Route path="/preview" component={Preview} />
    </div>
  );
}

export default App;

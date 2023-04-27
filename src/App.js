import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";

/**
 * "Jobly" - An app for finding jobs
 *
 * props:
 *  -none
 *
 * state:
 *  -none
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import { Nav } from "./components/Nav";
import Products from "./components/Products";
import { Route, Switch } from "react-router";
import { Card } from "./components/Card";
import Single from "./components/single";
const App = () => {
  const [appState, setAppState] = useState([]);
  const [darkmood, setDarkmood] = useState(false);

  const newdata = (data) => {
    setAppState(data);
  };
  const toggeldark = () => {
    setDarkmood(!darkmood);
    localStorage.setItem("dark", JSON.stringify(darkmood));
  };

  return (
    <div
      className={localStorage.getItem("dark") === "true" ? "App_dark" : "App"}
    >
      <Nav toggeldark={toggeldark} />
      <div className="flex_content">

        <Switch>
          <Route exact path="/">
            <Products newdata={newdata} appState={appState} />
          </Route>

          <Route path="/card/saved">
            <Card />
          </Route>

          <Route path="/:id">
            <Single />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

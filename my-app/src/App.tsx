import React from "react";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
//import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <h1>Welcome to My App</h1>
            {/* 既存のホームページコンテンツ */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

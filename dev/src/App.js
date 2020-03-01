import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Artist from "./components/Artists";
import Search from "./components/Search";
import Tracks from "./components/Tracks";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
          <Route path="/artists">
            <Artist />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

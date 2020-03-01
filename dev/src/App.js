import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Artist from "./components/Artists";
import Search from "./components/Search";
import Tracks from "./components/Tracks";
import Genders from "./components/Genders";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Albums from "./components/Albums";
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
          <Route path="/tracks/:id">
            <Tracks />
          </Route>
          <Route path="/artists">
            <Artist />
          </Route>
          <Route path="/artistsprofil">
            <Artist />
          </Route>
          <Route path="/genders">
            <Genders />
          </Route>
          <Route path="/albumbygender/:id">
            <Albums />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

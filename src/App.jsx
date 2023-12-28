import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Contacts from "./components/Contacts";
import Cart from "./components/Cart";

import React from "react";

const App = () => {
  return (
    <Router>
      <div>
        <Home />
        <Categories />
        <Contacts />
        <Resources />
        <Cart />
      </div>
    </Router>
  );
};

export default App;

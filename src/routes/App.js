import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hooks from "../dasar/Hooks";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Service from "../pages/Service";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/service" exact>
          <Service />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

// <Route path="*">
//   <NoMatch />
// </Route>;
// function NoMatch() {
//   return "404";
// }

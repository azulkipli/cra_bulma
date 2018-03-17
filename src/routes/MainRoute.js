import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/Loading";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../components/Home"),
  loading: () => <Loading />
});

const Help = Loadable({
  loader: () => import(/* webpackChunkName: "help"*/ "../components/Help"),
  loading: () => <Loading />
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about"*/ "../components/About"),
  loading: () => <Loading />
});

const MainRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/help" component={Help} />
  </Switch>
);

export default MainRoute;

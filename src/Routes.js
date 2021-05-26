import React from "react";
import { Route, Switch } from "react-router";
import Posts from "./components/Posts";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import SinglePosts from "./components/SinglePosts";

export default function Body() {
    return (
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/post/:slug" component={SinglePosts} />
      </Switch>
    );
  }
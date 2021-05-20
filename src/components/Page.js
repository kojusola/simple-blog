import React from "react";
import { Route, Switch } from "react-router";
import Posts from "./Posts"
import SinglePosts from "./SinglePosts"

export default function Body() {
    return (
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/post/:slug" component={SinglePosts} />
      </Switch>
    );
  }
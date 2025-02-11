import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup";
import NewNote from "./components/NewNote";
import TopicContainer from "./components/studyMaterial/TopicContainer";
import Design from "./components/design/Design";
import Notes from "./components/Notes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/notes/new">
        <NewNote />
      </Route>
      <Route exact path="/notes/:id">
        <Notes />
      </Route>
      <Route exact path="/study">
        <TopicContainer />
      </Route>
      <Route exact path="/design">
        <Design />
      </Route>
      <PageNotFound />
    </Switch>
  );
}

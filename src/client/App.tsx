import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import AllBlogs from "./components/public/AllBlogs";
import SingleBlog from "./components/public/SingleBlog";
import Admin from "./components/admin/Admin";
import Login from "./components/admin/Login";
import Payment from "./components/public/Payment";
import Mail from "./components/public/Mail";

export default class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AllBlogs} />
            <Route exact path="/single/:id" component={SingleBlog} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/mail" component={Mail} />

          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

interface IAppProps {}

interface IAppState {}

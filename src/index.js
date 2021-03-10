import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {Router, Route, Switch, Redirect, BrowserRouter} from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import App from "./App";

const hist = createBrowserHistory();

const app = (
    <Router history={hist}>
            <App />
        </Router>
);
ReactDOM.render(app,document.getElementById("root"));
// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/admin" component={Admin} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/Pages/About"

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './css/slick.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import Howit from "./components/Pages/Howit";
import CounterDashboard from "./components/CounterDahboard/CounterDashboard";

export default class App extends Component {
  render() {
    return (
      // <p>fsefs</p>
      <Router >
        <Switch>

          <Route
            exact
            path="/about"
            render={props => <About {...props}/>
            }
          ></Route>
          <Route
            exact
            path="/howit"
            render={props => <Howit {...props}/>
            }
          ></Route>
          <Route
            exact
            path="/dashboard"
            render={props => <CounterDashboard {...props}/>
            }
          ></Route>
          <Route
            exact
            path="/"
            render={props => <Home {...props}/>
            }
          >

          </Route>
          

        </Switch>
    
    </Router>
    );
  }
}

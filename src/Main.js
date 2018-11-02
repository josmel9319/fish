import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tanks from "./Tanks";
import Online from "./Online";
 
class Main extends Component {
  render() {
    return (
	<HashRouter>
        <div>
          <h1>Fish Store</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/tanks">Tanks</NavLink></li>
            <li><NavLink to="/online">Online</NavLink></li>
          </ul>
          <div className="content">
		    <Route exact ath="/" component={Home}/>
            <Route path="/tanks" component={Tanks}/>
            <Route path="/onLine" component={Online}/>
             
          </div>
        </div>
	</HashRouter>
    );
  }
}
 
export default Main;
import React, { Component } from 'react';
import './App.css';
import {Login} from "./component/Login";
import ResponsiveDrawer from "./component/Drawer";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const LoginView = () => (
    <Login/>
);

const DrawerView = () => (
    <ResponsiveDrawer/>
);

localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');

class App extends Component {

  render() {

    return (
        <Router>
          <div className="App">

            <br/>
            <br />
            <br />

            <li><Link to="/">Login</Link></li>
            <li><Link to="/drawer">Drawer</Link></li>

            <div>
                <Route exact path="/" component={LoginView}/>
                <Route path="/drawer" component={DrawerView}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;

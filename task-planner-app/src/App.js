import React, { Component } from 'react';
import './App.css';
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const LoginView = () => (
    <Login/>
);

localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');

class App extends Component {

  render() {

    return (
        <Router>
          <div className="App">

            <br/>
            <br/>

            <div>
              <Route exact path="/" component={LoginView}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;

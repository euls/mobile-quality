import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Report from './pages/report';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Route exact path="/" component={Home} />
                <Route path="/report" component={Report} />
            </div>
        </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import JSX from './exercises/jsx'
import Components from './exercises/components'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul>
              <li><Link to='/'>JSX</Link></li>
              <li><Link to='/components'>Basic Components</Link></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path='/' component={JSX} />
            <Route path='/components' component={Components} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

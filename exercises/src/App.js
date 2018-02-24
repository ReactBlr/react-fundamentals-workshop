import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import JSX from './exercises/jsx'
import BasicComponents from './exercises/basic-components'
import Props from './exercises/props'
import State from './exercises/state'
import Children from './exercises/children'
import Events from './exercises/events'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul>
              <li><Link to='/'>JSX</Link></li>
              <li><Link to='/basic-components'>Basic Components</Link></li>
              <li><Link to='/props'>Props</Link></li>
              <li><Link to='/state'>State</Link></li>
              <li><Link to='/children'>Children</Link></li>
              <li><Link to='/events'>Events</Link></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path='/' component={JSX} />
            <Route path='/basic-components' component={BasicComponents} />
            <Route path='/props' component={Props} />
            <Route path='/state' component={State} />
            <Route path='/children' component={Children} />
            <Route path='/events' component={Events} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

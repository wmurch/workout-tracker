import React, { Component } from 'react'
import Home from './pages/Home'
import Build from './pages/Build'
import Search from './pages/Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Active from './pages/Active'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" component={Search} />
            <Route path="/Build" component={Build} />
            <Route path="/Active" component={Active} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App

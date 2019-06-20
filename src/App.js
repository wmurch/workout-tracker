import React from 'react'
import Home from './pages/Home'
import Build from './pages/Build'
import Search from './pages/Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Active from './pages/Active'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/build" component={Build} />
          <Route path="/active" component={Active} />
        </Switch>
      </Router>
    </>
  )
}

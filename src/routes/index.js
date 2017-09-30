import React, { Component } from 'react'
import { Bundle } from '../utils'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import CreateProjectContainer from '../entries/createProject/root'

const Container = styled.div`text-align: center;`

const CounterContainer = props =>
  <Bundle load={import('../modules/counter/CounterContainer')}>
    {CounterContainer => <CounterContainer {...props} />}
  </Bundle>

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CounterContainer} />
          <Route path="/project/create" component={CreateProjectContainer} />
          <Route path="/create" component={CounterContainer} />
        </div>
      </Router>
    )
  }
}

export default Routes

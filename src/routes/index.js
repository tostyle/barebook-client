import React, { Component } from 'react'
import Header from '../modules/counter/CounterHeader'
import { Bundle } from '../utils'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

const CounterContainer = props =>
  <Bundle load={import('../modules/counter/CounterContainer')}>
    {CounterContainer => <CounterContainer {...props} />}
  </Bundle>

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" component={CounterContainer} />
          <Route path="/example" component={CounterContainer} />
        </Container>
      </Router>
    )
  }
}

export default Routes

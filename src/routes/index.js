import React, { Component } from 'react'
import { Bundle } from '../utils'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import CreateProjectContainer from '../entries/createProject/root'
import UploadProjectContainer from '../modules/uploadProject/UploadProjectContainer'
import PreviewProjectContainer from '../modules/previewProject/PreviewProjectContainer'

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
          <Route path="/project/upload" component={UploadProjectContainer} />
          <Route path="/project/preview" component={PreviewProjectContainer} />
        </div>
      </Router>
    )
  }
}

export default Routes

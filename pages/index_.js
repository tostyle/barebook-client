import React, { Component } from 'react'
import NoSSR from 'react-no-ssr'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Helloworld = () => <div>Helloworld</div>
const HelloCreate = () => <div>project create</div>
const HelloUpload = () => <div>project upload</div>
const HelloPreview = () => <div>project preview</div>

class Routes extends Component {
  // render () {
  //   return (<div>HSSSSSSSSSSSSSS</div>)
  // }
  render() {
    return (
      <NoSSR>
        <Router>
          <div>
            <Link to={'/project/create'}>Create Proejct</Link>
            <Route exact path="/" component={Helloworld} />
            <Route path="/project/create" component={HelloCreate} />
            <Route path="/project/upload" component={HelloUpload} />
            <Route path="/project/preview" component={HelloPreview} />
          </div>
        </Router>
      </NoSSR>
    )
  }
}

// const App = () => (<div>Hello world</div>)

export default Routes

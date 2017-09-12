# Boilerplate for zanroo web client
[See full documents at](./docs/create-redux-app)

[![generator-create-redux-app](https://img.shields.io/badge/built%20with-generator--create--redux--app-brightgreen.svg)](https://github.com/jonidelv/generator-create-redux-app)

This project was generated with [Create Redux App](https://github.com/jonidelv/create-redux-app). Refer to `docs/create-redux-app` to find more information on how to perform common tasks.

Once the installation is done, you can run some commands inside the project folder:

# This version support for multiple entry points of bundle

## How to config multiple entry points
Look at configs/builds.js
```js
{
  /**
   * Entrys is setting for entry points
   * [key] mean a bundle name ([name].js)
   * [value] mean a path to entry file start of key in your set
   */
  entrys: {
    index: 'src/index.js',
    foo: 'src/foo.js',
    // bar: 'src/bar.js',
    // baz: 'src/baz.js',
  },
  /**
   * Generates an `[name].html` file with the <script> and other tag
   * it will be automatic injected with static file.
   * If you don't want to use set it to empty
   * @example { htmls: {} }
   */
  htmls: {
    index: 'public/index.html',
    foo: 'public/foo.html',
    // bar: 'public/bar.html',
    // baz: 'public/baz.html',
  },
  // Path is a path to folder output of any your bundle files.
  path: '../public',
}
```

## how to run script
For dev
```bash
  yarn starts
```
For build production
```bash
  yarn builds
```
For your want to build any bundle, you can set environment name (BUNDLE_NAME) and split with comma (,) be able to set in command.
example: It will bundle specifically
```bash
  BUNDLE_NAME=index,foo,bar yarn starts
```
or
```bash
  BUNDLE_NAME=index,foo,bar yarn builds
```

Or read below to you want use the normally.

## Custom Add
- Lazy load helper components (code split bundle loader).
- [Test with enzyme](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)
- [Style css builder](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

## Custom disabled
- Remove yarn generate
- Remove ./containers/
- Remove ./components/
- Remove ./tests/

**Note**<br>
ที่เหลืออ่าน Doc ของ [react-create-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) เอานะ ถ้าจะทำอะไรเพิ่ม ตัวนี้ทำได้หมด เพราะครอบมาอีกที

## Lazy load bundle example

### Usage
```js
// src/routes/index.js

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
```

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

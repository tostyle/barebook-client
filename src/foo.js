import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './styles/global-styles'

import React from 'react'
import { render } from 'react-dom'
import { registerServiceWorker } from './utils'

render(<h1>Foo Page</h1>, document.getElementById('root'))
registerServiceWorker()

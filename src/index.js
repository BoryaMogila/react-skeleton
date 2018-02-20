import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import routes from './routes'
import { renderRoutes, matchRoutes } from 'react-router-config';
import ReactDOM from 'react-dom'

const Index = () => (
  <Router>
    {renderRoutes(routes)}
  </Router>
)

ReactDOM.render(<Index />, document.getElementById("app"));

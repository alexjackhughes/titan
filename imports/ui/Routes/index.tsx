import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Contact from '../Contact'
import App from '../App'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default Routes

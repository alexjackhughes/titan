import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home'
import Contact from '../Contact'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/App" component={App} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default Routes

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import ConverterPage from './pages/converter/ConverterPage'
import DashboardPage from './pages/dashboard/DashboardPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ConverterPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
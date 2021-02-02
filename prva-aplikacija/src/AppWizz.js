import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import RegistrationPage from './wizzComponents/RegistrationPage.js'
import HomePage from './wizzComponents/HomePage.js'

class AppWizz extends React.Component {

  render = () => {
    return (
      <div>
        <BrowserRouter>
          <Switch>

            <Route exact path='/'>
              <RegistrationPage />
            </Route>

            <Route path='/home'>
              <HomePage />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default AppWizz
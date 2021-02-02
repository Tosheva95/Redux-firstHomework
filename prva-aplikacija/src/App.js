import React from 'react'
import './App.css'
// import Button from './Button.js'
// import Calc from './Calc'
// import Counter from './Counter'
// import Clock from './Clock'
// import Toolbar from './components/Toolbar.js'
// import Users from './components/Users.js'
// import Posts from './components/Posts.js'
// import FunCalc from './components/FunCalc'
// import FunClock from './components/FunClock'
import  {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './components/Home.js'
import Songs from './components/Songs.js'
import Albums from './components/Albums.js'
import Artists from './components/Artists.js'
import AboutUs from './components/AboutUs.js'
import Menu from './components/Menu.js'
import Login from './components/Login.js'

// const items = [
//   'Home',
//   'Books',
//   'Authors',
//   'Favourites'
// ]

class App extends React.Component {

  render = () => {
    return (
      <div>
        <BrowserRouter>
        <Menu />
          <Switch>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/songs'>
              <Songs />
            </Route>

            <Route path='/albums'>
              <Albums />
            </Route>

            <Route path='/artists'>
              <Artists />
            </Route>

            <Route path='/contact'>
              <AboutUs />
            </Route>

            <Route exect path ='/'>
              {/* ako sakame da rabotime bez komponenta moze i so f-cija pr. {() => { return <h1>Welcome</h1>}} */}
              <Home />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
            
          </Switch>
        </BrowserRouter> 
        {/* <h1>Welcome to my first react webpage!</h1>
        <Button greeting='ZDRAVO SEMOS' />
        <Counter />
        <Calc /> */}
        {/* <Clock /> */}
        {/* <FunCalc /> */}
        {/* <FunClock /> */}
        {/* <Toolbar menuItems={items} /> */}
        <br />
        {/* <Users /> */}
        {/* <Posts /> */}
      </div>
    )
  }
}

const NotFound = () => {
  return <div>Error 404!</div>
}

export default App
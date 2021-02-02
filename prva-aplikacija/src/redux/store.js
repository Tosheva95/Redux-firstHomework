// global state / redux state
// store e obicen objekt

//ACTION -  they initiate the change
//REDUCERS - they save the change in the store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { counterReducer } from './counter/counter' 
import { loginReducer } from './login/login'
import logger  from 'redux-logger'
import { albumsReducer } from './albums/albums.js'

// so CTRL + SPACE gi dava kako suggestions importite vo golemite zagradi

const allReducers = combineReducers({
  counterReducer,
  loginReducer,
  albumsReducer
})

const store = createStore(allReducers, applyMiddleware(logger))



export default store
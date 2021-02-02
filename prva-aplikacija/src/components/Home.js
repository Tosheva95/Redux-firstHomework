import React from 'react'
// import Counter from '../CounterRedux'
import { useSelector } from 'react-redux'

const Home = () => {
const  username  = useSelector((store) => store.loginReducer.username)

  return <h1> Welcome {username} to our music store! 

  {/* <Counter/> */}
  
   </h1>
}

export default Home
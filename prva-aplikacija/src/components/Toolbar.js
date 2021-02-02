import React, { useState, useEffect } from 'react'
import '../styles/Toolbar.css'
import logo from '../images/bookimage.png'
// import {Button} from 'react-bootstrap'

// Main navigation component

// function Toolbar () {

// }

//ista funkcija

let imgStyle = { maxWidth: '5rem', paddingTop: '0.5px' };

// props is an object
const Toolbar = (props) => {

  // const {menuItems} = props

  const [itemClicked, click] = useState(null)
  const [content, renderContent] = useState(null)
  // moze i vaka 
  // const menuItems = props.menuItems
  
  // STATE HOOK 
  // const [counter, setCounter] = useState(0)

  //DOMASNA !!!!!
  // if (menuItems.lenght < 1) {
  //    return <div>Error!<div/>;
  // }

  
  // const [user, setUser] = useState('Ivana')

  // const decrement = () => {
  //   const newState = counter - 1
  //   setCounter(newState)
  // }
  // const increment = () => {
  //   const newState = counter + 1
  //   setCounter(newState)
  // }

  // useEffect(() => {
  //   alert('The menu items are empty!')
  // }, [menuItems])

  // component willUnmount

  // useEffect(() => {
  //   alert()

  //   return () => {}
  // }, [menuItems])


  useEffect (() => {
    // alert (itemClicked)
    if(itemClicked) {

      renderContent ('Welcome to my page: ' + itemClicked)
    }
    }, [itemClicked])

  // no render method 
  return (
    <div>

      {/* <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button> */}

      {/* <Button variant='secondary' onClick={decrement}>-</Button>
      <span>{counter}</span>
      <Button variant='secondary' onClick={increment}>+</Button> */}

      <ul className='toolbar-list'>
        <li>
          <img alt='placeholderImage' src={logo} style={imgStyle} />
        </li>
        {props.menuItems.map((element, i) => <li key = {i} className='toolbar-item' 
          onClick={() => click(element)}>
          {element}
        </li>
        )}
      </ul>
      {content}
    </div>
  )
}


export default Toolbar

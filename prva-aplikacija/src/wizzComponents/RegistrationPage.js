import React, { useState } from 'react'
import '../styles/RegistrationStyle.css'
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap'
import {  useHistory } from 'react-router'

const RegistrationPage = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePwd, setRePwd] = useState('')
  const history = useHistory();


  const changeEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const changeUsername = (event) => {
    const value2 = event.target.value
    setUsername(value2)
  }

  const changePassword = (event) => {
    const value3 = event.target.value
    setPassword(value3)
  }

  const changeRePwd = (event) => {
    const value4 = event.target.value
    setRePwd(value4)
  }

  const inputFunction = () => {
    if (!email || !username || !password || !rePwd) {
      alert("The field can not be empty, you are not registered. Please try again!");
    } else {
      history.push("/home");
    }
  }

  return <div className='card'>
    <Form className='showcase'>

      <FormGroup className='form-group' id='form-group'>
        <FormLabel className='text-style'>E-mail</FormLabel>
        <FormControl type='text' id='email' onChange={changeEmail}/>
      </FormGroup>

      <FormGroup className='form-group'>
        <FormLabel className='text-style'>Username</FormLabel>
        <FormControl type='text' id='username' onChange={changeUsername} />
      </FormGroup>

      <FormGroup className='form-group'>
        <FormLabel className='text-style'>Password</FormLabel>
        <FormControl type='password' id='pwd' onChange={changePassword} />
      </FormGroup>

      <FormGroup className='form-group'>
        <FormLabel className='text-style'>Re-type Password</FormLabel>
        <FormControl type='password' id='repwd' onChange={changeRePwd} />
      </FormGroup>

      <FormGroup>
        <Button className='register' type='button' id='register' onClick={inputFunction}>Register</Button>
      </FormGroup>
    </Form>
  </div>
}
export default RegistrationPage






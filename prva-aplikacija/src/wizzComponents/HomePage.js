import React from 'react'
import '../styles/HomeStyle.css'
import logo from '../images/wizzAirLogo.png'
import logoThree from '../images/wizz.jpg'
import { FormGroup, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return <div>
    <img alt='placeholderImage' src={logo} className='image' />
    <h1 className='heading'>Welcome to the world of opportunity!</h1>

    <Table className='table'>
      <thead>
        <tr>
          <th>Official Wizz Air website</th>
          <th><a href="https://wizzair.com/en-gb#/">Wizz Air</a></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Check-in and boarding</td>
          <td><a href="https://wizzair.com/en-gb/information-and-services/booking-information/check-in-and-boarding">Check-in</a></td>
        </tr>
        <tr>
          <td>Coronavirus information</td>
          <td><a href="https://wizzair.com/en-gb/coronavirus-information">Check informations</a></td>
        </tr>
        <tr>
          <td>Contact us</td>
          <td><a href="https://wizzair.com/en-gb/information-and-services/contact/contact-us">Contact us</a></td>
        </tr>
      </tbody>
    </Table>
    <FormGroup>
      <Link to='/' className='link'><Button type='submit' className='btn'>Sign Out</Button></Link>
    </FormGroup>

    <img className='imageTwo' alt='placeholderImage' src={logoThree} />

  </div>
}

export default HomePage






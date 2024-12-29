import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header--container'>
      <div className='header--child--one'>Healto<FontAwesomeIcon style={{fontSize:'30px',color:'#1A6D9A'}} icon={faStethoscope} /></div>
      <div className='header--child--two'>
        <div style={{width:'20%'}}>
            <h2>Hi, Asif</h2>
        </div>
        <div className='header--child1'>
            <NavLink style={{textDecoration:'none'}} to={'/home/bookAppointment'}>
               <h5>Book an Appointment</h5>
            </NavLink>
            <NavLink style={{textDecoration:'none'}}  to={'/home/appointment'}>
                <h5>Appointments</h5>
            </NavLink>
            <NavLink style={{textDecoration:'none'}}  to={'/home/aboutHospital'}>
                <h5>About Hospital</h5>
            </NavLink>
            <NavLink style={{textDecoration:'none'}}  to={'/login'}>
                <div className="logout-button">
                    Logout
                </div>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header

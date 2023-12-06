import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>
            <h1>Kalvium❤️</h1>
        </Link>
        <div>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default NavBar

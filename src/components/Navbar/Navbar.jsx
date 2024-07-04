import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>everythink</div>
        <div className='menu'> 
          <ul>
            <li><Link to={'/qatar'}>Qatar</Link></li>
            <li><Link to={'/india'}>India</Link></li>
            <li><Link to={'/works'}>WOrks</Link></li>
          </ul>
           </div>

    </div>
  )
}

export default Navbar
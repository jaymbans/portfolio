import { useState } from 'react';

function Navbar() {


  return (
    <div id='navbar'>
      <div className="navbar-left">
        <a href='#' className='nav-link'>Jordan.dev</a>
      </div>
      <div className="navbar-right">
        <a href='#' className='nav-link'>Home</a>
        <a href='#about-me' className='nav-link'>About</a>
        <a className='nav-link' href='#projects'>Projects</a>
        <a className='nav-link' href='#contact-me'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
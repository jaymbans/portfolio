import { useState } from 'react';

function Navbar() {


  return (
    <div id='navbar'>
      <div className="navbar-left">
        <a className='nav-link'>Jordan.dev</a>
      </div>
      <div className="navbar-right">
        <a className='nav-link'>Home</a>
        <a className='nav-link'>About</a>
        <a className='nav-link'>Projects</a>
        <a className='nav-link'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
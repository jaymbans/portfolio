import { useState } from 'react';

function Navbar() {
  const activateHamburgerMenu = (e) => {
    const menu = document.querySelector('#menu.navbar-right');

    let node = e.target;
    if (!Array.from(node.classList).includes('hamburger-menu')) {
      node = node.parentNode;
    }

    if (![...node.children[0].classList].includes('active')) {
      Array.from(node.children).forEach(child => child.classList.add('active'));
      menu.classList.add('show');
    } else {
      Array.from(node.children).forEach(child => child.classList.remove('active'))
      menu.classList.remove('show');
    }

  }

  return (
    <div id='navbar'>
      <div className="navbar-left">
        <a href='#' className='nav-link'>Jordan.dev</a>
        <button className="hamburger-menu" onClick={activateHamburgerMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>
      <div className="navbar-right" id='menu'>
        <a href='#' className='nav-link'>Home</a>
        <a href='#about-me' className='nav-link'>About</a>
        <a className='nav-link' href='#projects'>Projects</a>
        <a className='nav-link' href='#contact-me'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
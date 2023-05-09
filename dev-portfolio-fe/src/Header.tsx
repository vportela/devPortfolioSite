import React from 'react';
import './App.css';

function Header() {
  return (
    <div className='header'>
    <div>
        <h4 className='my-name'>Victoria Portela</h4>
    </div>
    <div className='nav-options'>
        <h4 className='nav-option'>Resume</h4>
        <h4 className='nav-option'>Contacts</h4>
    </div>
    </div>
  );
}

export default Header;
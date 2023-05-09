import React from 'react';
import './App.css';

function Header() {
  return (
    <div className='header'>
    <div>
        <h3 className='-my-name'>Victoria Portela</h3>
    </div>
    <div className='-nav-options'>
        <h3 className='-nav-option'>Resume</h3>
        <h3 className='-nav-option'>Contacts</h3>
    </div>
    </div>
  );
}

export default Header;
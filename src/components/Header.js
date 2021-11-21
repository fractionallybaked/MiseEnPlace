import React from 'react';
import Logo from '../images/mise.png';

const Header = (props) => {
  return (
    <div className='header-main-container'>
      <img className="logo-header" src={Logo} />
    </div>
  )
}

export default Header;
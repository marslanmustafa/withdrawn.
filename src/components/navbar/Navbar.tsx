import React from 'react';
import './navbar.css';
import { hamburger, logoImg } from '../../assets';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <img src={logoImg} alt='' className='logoImg'/>
      <img src={hamburger} alt="" />
    </div>
  )
}

export default Navbar
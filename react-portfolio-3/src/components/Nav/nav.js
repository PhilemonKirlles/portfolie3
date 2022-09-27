import React from 'react';
import { useState } from 'react';
import {IoIosHome} from 'react-icons/io';
import {HiIdentification} from 'react-icons/hi';
import {HiChatAlt2} from 'react-icons/hi';
 import{BiLibrary} from 'react-icons/bi';

import './nav.css'
const Nav = () => {const [activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#home' className={activeNav === '#home' ? 'active' : ''} ><IoIosHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiIdentification/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiChatAlt2/></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiLibrary/></a>
    </nav>
  )
}

export default Nav





import React from 'react';

import {IoIosHome} from 'react-icons/io';
import {HiIdentification} from 'react-icons/hi';
import {HiChatAlt2} from 'react-icons/hi';
 import{BiLibrary} from 'react-icons/bi';

import './nav.css'
const Nav = () => {
  return (
    <nav>
<a href='#'><IoIosHome/></a>
<a href='#about'><HiIdentification/></a>
<a href='#contact'><HiChatAlt2/></a>
<a href='#portfolio'><BiLibrary/></a>
    </nav>
  )
}

export default Nav





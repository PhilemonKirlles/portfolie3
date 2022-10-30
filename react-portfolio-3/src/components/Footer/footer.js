import React from 'react'

import {ImGithub} from 'react-icons/im';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {FaTwitterSquare} from 'react-icons/fa';

import {IoIosHome} from 'react-icons/io';
import {HiIdentification} from 'react-icons/hi';
import {HiChatAlt2} from 'react-icons/hi';
import{BiLibrary} from 'react-icons/bi';

import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href="#footer" className='footer_logo'>PAK</a>
      <ul className='quickLinks'>
      <li><a href='#home'><IoIosHome/></a></li>
      <li><a href='#about'><HiIdentification/></a></li>
      <li><a href='#contact'><HiChatAlt2/></a></li>
      <li><a href='#portfolio'><BiLibrary/></a></li>
      </ul>
      <div className='footer_socials'>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com'> <ImGithub/></a>
        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com'> <RiLinkedinBoxLine/> </a>
        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com'> <FaTwitterSquare/> </a>
     </div>

     <div className="footer_copyright">
     <small> &copy; CatFishChisel.PAK 2022. All rights reserved.
     </small>
     </div>

    </footer>
  )
}

export default footer


// function Footer() {
//     return (
//         <footer className="Footer">
//       <Row>
//       <Nav className="footerLink">
//         <Nav.Item className="footerText footLink">Connection</Nav.Item>
//         <Nav.Link className="footerText" href="mailto:philemon.kirlles@gmail.com">Email Me</Nav.Link>
//         <Nav.Link className="footerText" target={'_blank'} rel="noreferrer" href="https://github.com/PhilemonKirlles">GitHub</Nav.Link>
//         <Nav.Link className="footerText" target={'_blank'} rel="noreferrer" href="">LinkedIn</Nav.Link>

//       </Nav>
//       </Row>   
//         </footer>
//  )
// }
// export default Footer;


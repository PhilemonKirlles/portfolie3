 import React from 'react';
 
 import {ImGithub} from 'react-icons/im';
 import {RiLinkedinBoxLine} from 'react-icons/ri';
 import {FaTwitterSquare} from 'react-icons/fa';
 const HeaderSocials = () => {
   return (
     <div className='header_socials'>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com'> <ImGithub /> </a>
        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com'> <RiLinkedinBoxLine /> </a>
        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com'> <FaTwitterSquare /> </a>
     </div>
   )
 }
 
 export default HeaderSocials
 
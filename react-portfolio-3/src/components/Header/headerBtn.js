import React from 'react';
import Resume from '../../assets/documents/Philemon-Abdellah.pdf';


const headerBtn = () => {
  return (
    <div className='headerBtn'>
      <a href={Resume} >Resume</a>
      <a href='#contact'>Let's Chat</a>
    </div>
  )
}

export default headerBtn

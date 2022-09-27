import React from 'react';
import Resume from '../../assets/documents/Philemon-Abdellah.pdf';


const HeaderBtn = () => {
  return (
    <div className='headerBtn'>
      <a href= {Resume} download className='btn'>Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default HeaderBtn

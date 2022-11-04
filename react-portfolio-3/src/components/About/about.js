
import React from "react";
import './about.css';
import myImage from '../../assets/images/about-pic.jpg';
import{RiProjectorFill} from 'react-icons/ri';
import {MdMore} from 'react-icons/md'
// import Portfolio from '../Portfolio/Portfolio'
 
const About = () => {
  return (
    <section id='about'>
      <div className='container about_container '>
        <div className='about_me'>
          <div className="about_me-image">
            <img src= {myImage} alt='Profile of Philemon Kirlles, Develeoper'></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards ">

            <article className='about_card'>
              <MdMore className='about_card-icons'/>
              <h5>Bio</h5>
              <p> 
         Philemon Kirlles is a full stack developer, multi-instrumentalist,
         composer and luthier. He studied music at the Cairo Conservatory,
         The Eastern Music Institute, and studied music composition and
         theory in the Higher Institute for Arabic Music. He has a BA in
         Music and Cultural Anthropology from the University of Alabama, and
         has studied Ethnomusicology at Wesleyan University.He is currently
         enrolled in University of Connecticut's Coding Boot Camp in order to
         change careers. 
         </p> 
            </article> 
          </div>


         <a href="#contact" className= 'btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About



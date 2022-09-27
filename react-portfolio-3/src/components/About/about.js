
import React from "react";
import './about.css';
import MyImage from '../../assets/images/about-pic.jpeg';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import {GiSkills} from  'react-icons/gi';
import{RiProjectorFill} from 'react-icons/ri';
import {MdMore} from 'react-icons/md'

 
const About = () => {
  return (
    <section id='about'>
    <h2> About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className=" about_me-image">
            <img src={MyImage} alt='Profile of Philemon Kirlles, Develeoper'></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiSkills className='Skills_card-icon'/>
              <h5>Skills</h5>
            </article> 

            <article className='about_card'>
              <RiProjectorFill className='portfolio_card-icon'/>
              <h5>Portfolio</h5>
            </article> 

            <article className='about_card'>
              <MdMore className='bio_card-icon'/>
              <h5>Bio</h5>
            </article> 
          </div>
          <p> 
         Philemon Kirlles is a full stack developer, multi-instrumentalist,
         composer and luthier. He studied music at the Cairo Conservatory,
         The Eastern Music Institute, and studied music composition and
         theory in the Higher Institute for Arabic Music. He has a BA in
         Music and Cultural Anthropology from the University of Alabama, and
         has studied Ethnomusicology at Wesleyan University.He is currently
         enrolled in University of Connecticut's Coding Boot Camp in order to
         change careers. 
        <b/>
         Originally a cellist, Philemon has been playing
         music and composing since he was a child. He has studied under
         notable Egyptian musicians like Atia Sharara, Alfred Gamil, Mishel
         Almasry, Ragih Dawood, Mushira Said, and Ina'am Labib. At 18 he
         began teaching at the National Cultural Center for Children in
         Cairo. Philemon has excelled as a composer, music transcriber, and
         theorist. He has written music for stage performances, plays, solo
         instrumentalists, and ensembles. He has also worked as the primary
         transcriber for numerous Cairo-based bands and orchestras. He is
         well-versed in using Sibelius as a tool for composition,
         transcription and audio output. While in Egypt, Philemon worked as
         an administrator for Qithara Ensemble. He was also the assistant and
         cultural liaison to American photographer, Nicole LeCorgne, who was
         documenting musical life in Cairo. Since moving to the States,
         Philemon had done field recording for the World Music Archives at
         Wesleyan University, and worked as a library assistant for Olin
         Music Library, where he digitized and archived field recordings, as
         well as and modified, catalogued and maintained records for the
         Library of Congress database. Philemon is multilingual and has
         taught Arabic at the University of Alabama’s Critical Languages
         Center, where he was also a research assistant developing and
         translating for the Syriac reference portal database:
         https://syriaca.org/project-team.html. As a luthier, Philemon owned
         and operated his own instrument building and repair business, called
         Lizmonia.
         </p> 
         <a href="#contact" className= 'btn btn-primary'>Let's Chat</a>
        </div>
      </div>

    </section>
  )
}

export default About



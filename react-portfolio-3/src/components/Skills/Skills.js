import React from 'react';
import './skills.css';
import {GiSkills} from  'react-icons/gi';

import {IoLogoHtml5} from 'react-icons/io';
import {IoLogoCss3} from 'react-icons/io';
import {IoLogoJavascript} from 'react-icons/io';
import {SiBootstrap} from 'react-icons/si';
import {SiReact} from 'react-icons/si';


import {IoLogoNodejs} from 'react-icons/io';
import {SiExpress} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
import {SiGraphql} from 'react-icons/si';


const Skills = () => {
  return (
    <section id='skills'>
      <div className='container skills_container'>
        
        <h5>Skills</h5>
        <GiSkills className='skills_container-icons'/>

        <div className='skills_frontend'>
         <h3>Frontend Development</h3>
            <div className='skills_content'>

              <article className='skills_details'>
                  <IoLogoHtml5/>
                  <h4>HTML</h4>
              </article>

              <article className='skills_details'>
               <IoLogoCss3/>
               <h4>CSS</h4>
              </article>

              <article className='skills_details'>
                <IoLogoJavascript/>
                <h4>Java Script</h4>
              </article>

              <article className='skills_details'>
                <SiBootstrap/>
                <h4>Bootstrap</h4>
              </article>

              <article className='skills_details'>
                <SiReact/>
                <h4>React</h4>
              </article>

              </div>
          </div>
        

        <div className='skills_backend'>
        <h3>Backend Development</h3>
          <div className='skills_content'>

            <article className='skills_details'>
              <IoLogoNodejs/>
              <h4>Node</h4>
            </article>

            <article className='skills_details'>
             <SiExpress/>
              <h4>Express</h4>
            </article>

            <article className='skills_details'>
              <SiMongodb/>
              <h4>MongoDB</h4>
            </article>

            <article className='skills_details'>
              <SiMysql/>
              <h4>MySql</h4>
            </article>

            <article className='skills_details'>
              <SiGraphql/>
              <h4>GraphQL</h4>
            </article>

          </div>
      </div>

       </div>
      </section>
  )
}

export default Skills

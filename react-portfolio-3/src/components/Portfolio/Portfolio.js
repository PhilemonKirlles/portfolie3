import React from 'react'
import './portfolio.css'
import folioImg1 from '../../assets/images/weTravelToo.png'
import folioImg2 from '../../assets/images/sunny-SideUp.png'
import folioImg3 from '../../assets/images/passwordGenerator.png'
import folioImg4 from '../../assets/images/budgetTracker.png'
import folioImg5 from '../../assets/images/i-Reckon.gif'
import folioImg6 from '../../assets/images/teamMaker.png'
import folioImg7 from '../../assets/images/quizky.png'
import folioImg8 from '../../assets/images/noted.mp4'

const data = [
    {
    id:1,
    title: "weTravelToo",
    description: "MERN stack App, using graphql, and Cloudinary.",
    summery: "A Travel blog for users to talke about traviling. You can login post, create blog and upload your travel photos",
    image:folioImg1,
    alt: "A blog Screenshots",
    website: "https://we-travel-too.herokuapp.com/",
    repo: "https://github.com/PhilemonKirlles/weTravelToo" 
   },
   {id:2,
    title: "Sunny-SideUp",
    description: "Javascript, Rest-API, and googl's maps API  ",
    summery: "weather app foucusing on current activinies, weather, and alarts around the sure.",
    image:folioImg2,
    alt: "Sunny-SideUp Screenshots",
    website: "https://philemonkirlles.github.io/SunnySide-Up/",
    repo: "https://github.com/PhilemonKirlles/SunnySide-Up"
    },

   {
    id: 3,
    title: "Password Generator",
    description: "Javascript, CSS, HtMl",
    summery: "A web-based application for generating random passwords. The application allowes for specifiying the type and the lenght of chractures to be generated.",
    image:folioImg3,
    alt: "PassWord Generator Screenshots",
    website: "https://philemonkirlles.github.io/password-generator/",
    repo: "https://github.com/PhilemonKirlles/password-generator",
   },
  
   {
    id: 4,
    title: "Budget Tracker",
    description: "Node js applecation",
    summery: "My first portfolio page built after 4 weeks in class. How far I've come!",
    image:folioImg4,
    alt: "Budget tracker Screenshots",
    website: "https://budget-tracker-calc.herokuapp.com/",
    repo: "https://github.com/PhilemonKirlles/budget-tracker",
   },
  
   {
    id: 5,
    title: "i-Reckon",
    description: "HTML, CSS, Javascript, REST, Weather API",
    summery: "An app to get local weather reports. or search by city name. Automaticly it saves the cities you look up. You can clear history if you wish.",
    image:folioImg5,
    alt: "Weather App Screenshots",
    website: "https://philemonkirlles.github.io/i-Reckon/",
    repo: "https://github.com/PhilemonKirlles/i-Reckon",
   },

   {
    id:6,
    title: "Team Maker",
    description: "A node.js commandline application that can generate an HTML page that desplaies a summary of a users's input.",
    summery:"To creat a tech team on commandline, then you generate an html desplaying the team members.",
    image:folioImg6,
    alt: "Team Maker Screenshots",
    website: "https://philemonkirlles.github.io/team-maker/",
    repo: "https://github.com/PhilemonKirlles/team-maker",
    },
    {
    id:7,
    title: "Quizky",
    description: "HTML5,CSS, Bootstrap, JavaScript, Markdown, Moment",
    summery: "A fun quiz to test your JS Knowlag",
    image:folioImg7,
    alt: "Quizky Screenshots",
    website: "https://philemonkirlles.github.io/quizky/",
    repo: "https://github.com/PhilemonKirlles/quizky",
    },
    {
    id:8,
    title: "Noted",
    description: "HTML5, CSS, JavaScript",
    summery: "Noted, is used to type, save, and delete notes on a web page deployed through Heroku The applecation uses Express.js for the backend, the notes' data are saved and retreved from a JSON file.",
    image:folioImg8,
    alt: "Note Taking App Screenshots",
    website: "https://philemon-noted.herokuapp.com/",
    repo: "https://github.com/PhilemonKirlles/Noted",
    },
];


    const Portfolio = () => {
        return (
            <section  id='portfolio'>
               Portfolio
               <h5> Recent Work</h5>
               <h2> Portfolio</h2>
    
               <div className='container portfolio_container'>
               {
                data.map(({id, title, image, alt, website, repo, summery, description}) =>{
                    return (
                        <article key={id} className='portfolio_item'>
                        <div  className='portfolio_item-image'>
                        <img src= {image} alt={alt} />
                        </div>
                         <h3>{title}</h3>
                         <p>{summery}</p>
                         <small>{description}</small>
                        <div className='portfolio_item-cta'>
                        <a href={repo} className='btn'>github</a>
                        <a href={website} className='btn btn-primary'>Diployment</a>
                    </div>
                </article>
                )
                })
               }
                </div>
        </section>
        )
    }

export default Portfolio;

        //    <article className='portfolio_item'>
        //       <div  className='portfolio_item-image'>
        //           <img src= {folioImg1} alt='' />
        //       </div>
        //       <h3>project titel ex</h3>
        //       <div className='portfolio_item-cta'>
        //           <a href='https://github.com' className='btn'>github</a>
        //           <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
        //       </div>
        //   </article>
        //  <article className='portfolio_item'>
        //       <div  className='portfolio_item-image'>
        //           <img src= {folioImg1} alt='' />
        //       </div>
        //       <h3>project titel ex</h3>
        //       <div className='portfolio_item-cta'>
        //           <a href='https://github.com' className='btn'>github</a>
        //           <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
        //       </div>
        //   </article>
        //  <article className='portfolio_item'>
        //       <div  className='portfolio_item-image'>
        //           <img src= {folioImg1} alt='' />
        //       </div>
        //       <h3>project titel ex</h3>
        //       <div className='portfolio_item-cta'>
        //           <a href='https://github.com' className='btn'>github</a>
        //           <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
        //       </div>
        //   </article>
        //  <articl className='portfolio_item'>
        //       <div  className='portfolio_item-image'>
        //           <img src= {folioImg1} alt='' />
        //       </div>
        //       <h3>project titel ex</h3>
        //       <div className='portfolio_item-cta'>
        //           <a href='https://github.com' className='btn'>github</a>
        //           <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
        //       </div>
        //   </articl      <article className='portfolio_item'>
        //       <div  className='portfolio_item-image'>
        //           <img src= {folioImg1} alt='' />
        //     </div>
        //         <h3>project titel ex</h3>
        //         <div className='portfolio_item-cta'>
        //             <a href='https://github.com' className='btn'>github</a>
        //             <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
        //         </div>
        //     </article> *
        
    
   
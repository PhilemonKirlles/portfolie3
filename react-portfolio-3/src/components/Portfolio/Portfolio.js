import React from 'react'
import './portfolio.css'
import folioImg1 from '../../assets/images/1.jpg'
import folioImg2 from '../../assets/images/2.jpg'
import folioImg3 from '../../assets/images/3.jpg'
import folioImg4 from '../../assets/images/4.jpg'
import folioImg5 from '../../assets/images/5.jpg'
import folioImg6 from '../../assets/images/6.jpg'


const data = [
   {
    id:1,
    title: "weTravelToo",
    description: "MERN stack App, using graphql, and Cloudinary.",
    summery: "A Travel blog for users to talke about traviling. You can login post, create blog andupload your images",
    image:folioImg1,
    alt: "A blog Screenshots",
    website: "https://we-travel-too.herokuapp.com/",
    repo: "https://github.com/PhilemonKirlles/weTravelToo" 
   },
   {
    id:2,
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
    title: "password generator",
    description: "Javascript, CSS, HtMl",
    summery: "",
    image:folioImg3,
    alt: "PassWord Generator Screenshots",
    website: "https://philemonkirlles.github.io/password-generator/",
    repo: "https://github.com/PhilemonKirlles/password-generator",
   },
  
   {
    id: 4,
    title: "budget Tracker",
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
    description: "HTML, CSS, Javascript, Weather API",
    summery: "An app to get local weather reports. or search by city name. Automaticly it saves the cities you look up. You can clear history if you wish.",
    image:folioImg5,
    alt: "Weather App Screenshots",
    website: "https://philemonkirlles.github.io/i-Reckon/",
    repo: "https://github.com/PhilemonKirlles/i-Reckon",
   },

   {
    id:6,
    title: "Team Maker",
    description: "HTML, CSS, Javascript",
    summery: "A fun quiz to test your JS Knowlag",
    img: require("../../assets/photos/quizPic.png"),
    alt: "Quizky Screenshots",
    website: "https://philemonkirlles.github.io/team-maker/",
    repo: "https://github.com/PhilemonKirlles/team-maker",
    },
    {
    title: "Quizky",
    description: "HTML, CSS, Javascript",
    summery: "A fun quiz to test your JS Knowlag",
    img: require("../../assets/photos/quizPic.png"),
    alt: "Quizky Screenshots",
    website: " ",
    repo: "",
    },
];


    const Portfolio = () => {
        return (
            <section  id='portfolio'>
               Portfolio
               <h5> Recent Work</h5>
               <h2> Portfolio</h2>
    
               <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div  className='portfolio_item-image'>
                        <img src= {folioImg1} alt='' />
                    </div>
                    <h3>project titel ex</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com' className='btn'>github</a>
                        <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
                    </div>
                </article>

            {/* <article className='portfolio_item'>
                <div  className='portfolio_item-image'>
                    <img src= {folioImg1} alt='' />
                </div>
                <h3>project titel ex</h3>
                <div className='portfolio_item-cta'>
                    <a href='https://github.com' className='btn'>github</a>
                    <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <div  className='portfolio_item-image'>
                    <img src= {folioImg1} alt='' />
                </div>
                <h3>project titel ex</h3>
                <div className='portfolio_item-cta'>
                    <a href='https://github.com' className='btn'>github</a>
                    <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <div  className='portfolio_item-image'>
                    <img src= {folioImg1} alt='' />
                </div>
                <h3>project titel ex</h3>
                <div className='portfolio_item-cta'>
                    <a href='https://github.com' className='btn'>github</a>
                    <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <div  className='portfolio_item-image'>
                    <img src= {folioImg1} alt='' />
                </div>
                <h3>project titel ex</h3>
                <div className='portfolio_item-cta'>
                    <a href='https://github.com' className='btn'>github</a>
                    <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <div  className='portfolio_item-image'>
                    <img src= {folioImg1} alt='' />
                </div>
                <h3>project titel ex</h3>
                <div className='portfolio_item-cta'>
                    <a href='https://github.com' className='btn'>github</a>
                    <a href='https://github.com/diployed' className='btn btn-primary' target={'_blank'}>diployment</a>
                </div>
            </article> */}
           </div>
        </section>
    )
}

export default Portfolio


// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";



// function ProjectCard({ img, title, description, line, alt, website, repo }) {


//   return (
//     <Col className="CardCol">
//       <Card
//         className="text-center wholeCard"
//         style={{ width: "27rem", height: "34rem" }}
//       >
//         <Card.Header className="cardHeader">
        
//         </Card.Header>

//         <Card.Img src={img} alt={alt} />

//         <Card.Body>
//           <Card.Subtitle>Technologies Used: {description}</Card.Subtitle>
//           <br />
//           <Card.Text>{line}</Card.Text>
//           <>
//           </>
//         </Card.Body>
//           <Card.Footer className="btnDiv">
//             <Button className="AllBtn" as="a" href={website} target="_blank">
//               Live App  
//             </Button>
//             <Button className="AllBtn" as="a" href={repo} target="_blank">
//               Github Repo
//             </Button>
//           </Card.Footer>
         
//           {/* )} */}
//       </Card>
//     </Col>
//   );
// }

// export default ProjectCard;

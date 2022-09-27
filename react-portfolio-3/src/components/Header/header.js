import React from "react";
import "./header.css";
import HeaderBtn from './HeaderBtn';
import MyImage from "../../assets/images/profile-pic.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
    <div className="Container header_container">
    <h5> Hi I'm </h5>
    <h1> Philemon AbdEllah Kirlles </h1>
    <h5 className="text-light">Fullstack Developer</h5>
    <HeaderBtn />
     <HeaderSocials/>

    <div className="myImage">
      <imag src={MyImage} alt="Developer's Profile Image"/> 
    </div>
    <a href="#contact" className="scroll_down"> Scroll Down</a>
    </div>
    </header>
  );
};
 
export default Header;

// import React from "react";
// import Image from "../../assets/photos/NicePng_grid-background-png_1014345.png";
// import Row from "react-bootstrap/Row"
// import Container from "react-bootstrap/Container"
// import './style.css'

// const Hero = () => {
//   return (
//     <Container fluid className="Hero">
//         <Row className="heroRow">
//       <image id="animatedHero">
//         <source src={Image} type="placeholder" />
//       </image>
//         </Row>
//         </Container>
//   );
// };

// export default Hero;

import React from "react";
import "./header.css";
import HeaderBtn from './HeaderBtn';
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
     <article className="header_intro">
      <p>
      I am a certified Full Stack Developer, who is passionate about technology and programming. I build my projects with intense care and love for the creative problem solving skills that coding brings to the table.  I am the type of person who strives for perfection in my work. However, the way I achieve that perfection is by looking at failure as an opportunity  to be creative and learn new strategies. Learning and creativity are my hobbies; therefore, programming never seems like a chore/or "just a job" to me. Rather. programming gives me a chance to enjoy the activities I love!! 
      </p>
     </article>
    </div>
    </header>
  );
};
 
export default Header;



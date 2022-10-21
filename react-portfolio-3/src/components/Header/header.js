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
    </div>
    </header>
  );
};
 
export default Header;



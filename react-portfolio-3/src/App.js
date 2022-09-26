import React from 'react';
import { ReactDOM } from 'react';

import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import About from'./components/About/about';
import Projects from './components/Projects/projects';
import Contect from './components/Contact/contact'
import Footer from './components/Footer/footer';
import './index.css'




const App = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Projects/>
        <Contect/>
        <Footer/>
        </>
    )
}
export default App
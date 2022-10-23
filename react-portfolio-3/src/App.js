import React from 'react';
import Nav from './components/Nav/Nav';

import Header from './components/Header/Header';
import About from './components/About/About';

import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import './index.css'



const App = () => {
    return (
        
        <>
         <Nav/>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </>
        
    )
}
export default App
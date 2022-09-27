import React from 'react';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Portfolio/Portfolio';
import Contect from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
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
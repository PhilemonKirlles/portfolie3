import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavbarElements';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/pages/index';
import About from './components/pages/about';
import Blog from './components/pages/blog';
import SignUp from './components/pages/sign-up';
import Contact from './components/pages/contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;
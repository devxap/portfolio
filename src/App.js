import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index.js';
import NavList from './components/NavList/index.js';
import HeroSection from './components/HeroSection.js';
import Footer from './components/Footer/index.js';
import UserContextProvider from './context/UserContextProvider.jsx';
import UserContext from './context/UserContext.js';

function App() {

  
  return (
    <>
    <UserContextProvider>
    <Navbar/>
    <HeroSection/>
    <Footer/>
    </UserContextProvider>
    </>
  );
}

export default App;

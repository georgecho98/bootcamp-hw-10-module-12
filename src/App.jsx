import { useState } from 'react'
import './App.css'
import './components/style.css'
import Project from './components/Project.jsx';
import Header from './components/Header.jsx';

import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Header /> 
    <Outlet />
    
    <footer className="contact">
    <address>
    <div>
      <a> Twitter</a> 
      <a> TikTok </a>
      <a> xxxx@yahoo.com</a>     
      <a> Facebook </a> 
      
    </div>
    </address>
    </footer>
    </>
  )
}

export default App
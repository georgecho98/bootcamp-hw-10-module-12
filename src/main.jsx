import { StrictMode } from 'react'

import './index.css'
// import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Project from './components/Project';
import Header from './components/Header';

import Navigation from './components/Navigation';

import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      
      children: [
        {
          index: true,
          element: <About />,
        },        {
            path: 'Header',
            element: <Header />,
        },        
        {
            path: 'About',
            element: <About />,
        },        
        {
            path: 'Navigation',
            element: <Navigation />,
        },
        {
          path: 'Project',
          element: <Project />,
        },
        {
          path: 'Contact',
          element: <Contact />,
        },
        

      ],
    },
  ]);




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}  />
  );
  

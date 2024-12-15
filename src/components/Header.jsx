import './style.css'
import Navigation from './Navigation';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <h1>Hon's Portfolio</h1>
          <Navigation />
    </header>
  );
}

export default Header;

//* A single `Header` component that appears on multiple pages


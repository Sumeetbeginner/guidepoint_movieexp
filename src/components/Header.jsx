import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="logo">
        <h1>Movie Explorer</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/favorites' ? 'active' : ''}>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
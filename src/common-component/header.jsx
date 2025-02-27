import React from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/SeaGuardian Logo.png" alt="" />
      </Link>
      <ul>
        <li><Link href="#about-us">About Us</Link></li>
        <li><Link to="/our-program">Our Program</Link></li>
        <li><Link to="/action">Take Action</Link></li>
      </ul>
      <div className="donate">
        <li><Link to="/the-latest">The Latest</Link></li>
        <Link to="/donate">
          <button className="shadow__btn" style={{ color: 'black' }}>Donate</button>
        </Link>
        <Link to="/login">
          <button className="shadow__btn login">Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

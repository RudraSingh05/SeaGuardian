import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn, Twitter, YouTube, GitHub } from '@mui/icons-material';
import "../css/home.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-top">
          <div className="footer-headline">
            <h2>Donate to make Pollution-Free Marine</h2>
            <p>Stay up to date with our news and articles</p>
          </div>
          <div className="footer-subscribe">
            <Link to="/donate">
              <button id="donate">Donate</button>
            </Link>
          </div>
        </section>

        <div className="footer-columns">
          <section className="footer-logo">
            <img src="/logo 1.png" alt="SeaGuardian" />
          </section>
          <section>
            <h3>Product</h3>
            <ul>
              <li><Link to="/action">Take Action</Link></li>
              <li><Link to="/donate">Donation</Link></li>
            </ul>
          </section>
          <section>
            <h3>Resources</h3>
            <ul>
              <li><Link to="/latest">Latest Works</Link></li>
              <li><Link to="/our-programs">Our Programs</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <small>© SeaGuardian {new Date().getFullYear()}, All rights reserved</small>
          <span className="social-links">
            <Link to="#"><Instagram /></Link>
            <Link to="#"><LinkedIn /></Link>
            <Link to="#"><Twitter /></Link>
            <Link to="#"><YouTube /></Link>
            <Link to="#"><GitHub /></Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

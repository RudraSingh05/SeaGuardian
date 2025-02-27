import React from 'react';
import "../css/home.css";
import { Link } from 'react-router-dom';

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
              <li><Link href="./latest.html">Latest Works</Link></li>
              <li><Link href="./ourProgram.html">Our Programs</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </section>
        </div>
        <div className="footer-bottom">
          <small>© SeaGuardian <span id="year"></span>, All rights reserved</small>
          <span className="social-links">
            <Link href="#"><img src="/instagram.svg" alt="Instagram" /></Link>
            <Link href="#"><img src="/linkedin.svg" alt="LinkedIn" /></Link>
            <Link href="#"><img src="/twitter.svg" alt="Twitter" /></Link>
            <Link href="#"><img src="/youtube.svg" alt="YouTube" /></Link>
            <Link href="#"><img src="/github.svg" alt="GitHub" /></Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
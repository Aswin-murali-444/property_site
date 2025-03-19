import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

function Home() {
  return (
    <>
      <header className="header-container">
        <div className="logo">
          <h1>DreamHome Realty</h1>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/listing">Listing</Link></li>
            <li><Link to="/PropertiesForm">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="dropdown">
              <span>Services</span>
              <ul className="dropdown-menu">
                <li><Link to="/buy">Buy</Link></li>
                <li><Link to="/sell">Sell</Link></li>
                <li><Link to="/rent">Rent</Link></li>
              </ul>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search properties..." />
            <button type="button">Search</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to DreamHome Realty</h1>
            <p>Your trusted partner in finding your dream property.</p>
            <Link to="/listing" className="cta-button">Explore Listings</Link>
          </div>
        </section>

        <section className="properties">
          <h2 className="section-title">Our Featured Properties</h2>
          <div className="card-container">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" alt="Property 1" />
              <div className="info">
                <h3>Modern Apartment</h3>
                <p>New York, NY</p>
                <p>$850,000</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x200" alt="Property 2" />
              <div className="info">
                <h3>Luxury Villa</h3>
                <p>Miami, FL</p>
                <p>$2,500,000</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x200" alt="Property 3" />
              <div className="info">
                <h3>Cozy Cottage</h3>
                <p>Austin, TX</p>
                <p>$600,000</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <h2>Ready to Move In?</h2>
          <p>Contact us today to schedule a visit to your future home!</p>
          <Link to="/contact" className="cta-banner-button">Contact Us</Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 DreamHome Realty. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;

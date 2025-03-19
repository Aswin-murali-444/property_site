import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/list.css";

function Listing() {
  const [properties, setProperties] = useState([]);

  // Load properties from localStorage when component mounts
  useEffect(() => {
    const savedProperties = localStorage.getItem('properties');
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    }
  }, []);

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
            <h1>Available Properties</h1>
            <p>Explore our wide range of premium properties and find your next dream home.</p>
          </div>
        </section>

        <section className="properties">
          <h2 className="section-title">Property Listings</h2>
          <div className="card-container">
            {properties.length > 0 ? (
              // Render user-added properties
              properties.map((property, index) => (
                <div className="card" key={index}>
                  <img 
                    src={property.image} 
                    alt={property.title}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200";
                      e.target.alt = "Image not available";
                    }}
                  />
                  <div className="info">
                    <h3>{property.title}</h3>
                    <p>{property.location}</p>
                    <p>${property.price}</p>
                    {property.description && <p className="description">{property.description}</p>}
                  </div>
                </div>
              ))
            ) : (
              // Render default properties if no user-added properties exist
              <>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt="Property 1"/>
                  <div className="info">
                    <h3>Elegant Condo</h3>
                    <p>San Francisco, CA</p>
                    <p>$1,200,000</p>
                  </div>
                </div>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt="Property 2"/>
                  <div className="info">
                    <h3>Beachside Bungalow</h3>
                    <p>Santa Monica, CA</p>
                    <p>$3,800,000</p>
                  </div>
                </div>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt="Property 3"/>
                  <div className="info">
                    <h3>Urban Loft</h3>
                    <p>Brooklyn, NY</p>
                    <p>$950,000</p>
                  </div>
                </div>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt="Property 4"/>
                  <div className="info">
                    <h3>Suburban House</h3>
                    <p>Denver, CO</p>
                    <p>$600,000</p>
                  </div>
                </div>
              </>
            )}
          </div>
          {properties.length === 0 && (
            <div className="no-properties-message" style={{textAlign: 'center', marginTop: '20px'}}>
              <p>No custom properties found. <Link to="/PropertiesForm">Add some properties</Link> to see them here!</p>
            </div>
          )}
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

export default Listing;
import React from 'react'
import "../css/list.css";
function Listing() {
  return (
    <>
    

<header>
  <h1>DreamHome Realty - Property Listings</h1>
  <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/listing">Listing</a></li>
            <li><a href="/PropertiesForm">Properties</a></li>
          </ul>
        </nav>
</header>

<section class="hero">
  <h1>Available Properties</h1>
  <p>Explore our wide range of premium properties and find your next dream home.</p>
</section>

<section class="properties">
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Property 1"/>
    <div class="info">
      <h3>Elegant Condo</h3>
      <p>San Francisco, CA - $1,200,000</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Property 2"/>
    <div class="info">
      <h3>Beachside Bungalow</h3>
      <p>Santa Monica, CA - $3,800,000</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Property 3"/>
    <div class="info">
      <h3>Urban Loft</h3>
      <p>Brooklyn, NY - $950,000</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Property 4"/>
    <div class="info">
      <h3>Suburban House</h3>
      <p>Denver, CO - $600,000</p>
    </div>
  </div>
</section>

<footer>
  &copy; 2025 DreamHome Realty. All rights reserved.
</footer>


    </>
  )
}

export default Listing
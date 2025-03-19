import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../css/PropertiesForm.css";
import "../css/home.css"; // Import Home CSS for consistent styling

function PropertiesForm() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.location && formData.price && formData.image) {
      setProperties([...properties, formData]);
      setFormData({ title: "", location: "", price: "", image: "", description: "" });
    }
  };

  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

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
        <div className="properties-form-container">
          <h2 className="section-title">Define Properties</h2>

          <form onSubmit={handleSubmit} className="property-form">
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price (USD)"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Property Description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
            <button type="submit" className="add-button">Add Property</button>
          </form>

          <section className="properties-list">
            {properties.length === 0 ? (
              <p>No properties added yet.</p>
            ) : (
              properties.map((property, index) => (
                <div className="property-card" key={index}>
                  <img src={property.image} alt={property.title} />
                  <div className="property-info">
                    <h3>{property.title}</h3>
                    <p>{property.location}</p>
                    <p>${property.price}</p>
                    {property.description && <p className="property-description">{property.description}</p>}
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 DreamHome Realty. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default PropertiesForm;

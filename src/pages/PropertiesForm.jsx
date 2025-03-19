import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../css/PropertiesForm.css";

function PropertiesForm() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.location && formData.price && formData.image) {
      setProperties([...properties, formData]);
      setFormData({ title: "", location: "", price: "", image: "" }); // Reset form
    }
  };

  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  return (
    <>
      <header>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/listing">Listing</Link></li>
            <li><Link to="/PropertiesForm">Properties</Link></li>
          </ul>
        </nav>
      </header>

      <div className="properties-form-container">
        <h1>Define Properties</h1>

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

      <footer>
        &copy; 2025 DreamHome Realty. All rights reserved.
      </footer>
    </>
  );
}

export default PropertiesForm;

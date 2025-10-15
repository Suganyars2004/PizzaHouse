import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📨 Thank you for contacting us! We'll get back to you soon.");
    console.log("Form Data:", formData);
    // Optional: Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container p-5 bg-light min-vh-100 text-center">
      <h1 className="text-danger mb-3">Contact Us</h1>
      <p className="mb-4 fst-italic">We’d love to hear from you!</p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-white shadow p-4 rounded-3"
        style={{ maxWidth: "500px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="form-control mb-3"
        ></textarea>
        <button type="submit" className="btn btn-danger w-100">
          Send Message
        </button>
      </form>

      <div className="mt-5 text-dark">
        <h2 className="text-danger mb-3">Get in Touch</h2>
        <p><FaMapMarkerAlt /> 123 Cheezy Street, Pizza City, Tamil Nadu</p>
        <p><FaPhone /> +91 98765 43210</p>
        <p><FaEnvelope /> support@pizzahouse.com</p>

        <h3 className="mt-4">Working Hours</h3>
        <p>Mon – Sun: 10:00 AM – 11:00 PM</p>

        <div className="d-flex justify-content-center gap-3 mt-3 fs-3 text-danger">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="mt-5">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.469353066786!2d80.22096687480426!3d13.081719213232711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e8a28b0565%3A0x4c23e2e7e3e401a9!2sPizza%20Shop!5e0!3m2!1sen!2sin!4v1684247268129!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

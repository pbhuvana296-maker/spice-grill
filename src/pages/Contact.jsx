import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully. 🌶️");
  };

  return (
    <div className="contact-page">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg spice-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            🌶️ Spice & Grill
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/offers">
                  Offers
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Header */}
      <section className="contact-header">
        <div className="container text-center">
          <span className="small-title">GET IN TOUCH</span>

          <h1>
            Contact
            <br />
            <span>Spice & Grill</span>
          </h1>

          <p>
            Have a question, feedback or want to place an order?
            <br />
            We would love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">

              <span className="small-title">
                CONTACT US
              </span>

              <h2>
                Let's Talk
                <br />
                About Food!
              </h2>

              <p>
                Visit us or get in touch with our team. We are always
                happy to serve delicious food for you and your family.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <h5>Our Location</h5>
                  <p>
                    123 Food Street,
                    <br />
                    Madurai, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <h5>Phone</h5>
              <p> +91 98765 57948</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <h5>Email</h5>
                  <p>spicegrill@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>

                <div>
                  <h5>Opening Hours</h5>
                  <p>10:00 AM - 10:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">

              <span className="small-title">
                SEND A MESSAGE
              </span>

              <h2>
                We'd Love To
                <br />
                <span>Hear From You</span>
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">
                      Your Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Your Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn contact-btn"
                    >
                      Send Message
                      <i className="bi bi-send-fill ms-2"></i>
                    </button>
                  </div>

                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="offer-cta">
        <div className="container text-center">

          <span className="small-title">
            HUNGRY?
          </span>

          <h2>
            Taste The Spice
            <br />
            <span>Love The Grill!</span>
          </h2>

          <p>
            Explore our delicious menu and order your favourite food today.
          </p>

          <Link to="/menu" className="btn cta-btn">
            Explore Menu
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="restaurant-footer">
        <div className="container">

          <div className="row g-4">

            <div className="col-lg-5">
              <h3>🌶️ Spice & Grill</h3>

              <p>
                Fresh ingredients, authentic spices and delicious food
                made with love.
              </p>
            </div>

            <div className="col-lg-3">
              <h5>Quick Links</h5>

              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/offers">Offers</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div className="col-lg-4">
              <h5>Contact</h5>

              <p>📍 123 Food Street, Madurai</p>
              <p>📞 +91 98765 57948</p>
              <p>✉️ spicegrill@gmail.com</p>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © 2026 Spice & Grill. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Contact;
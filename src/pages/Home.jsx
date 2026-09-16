import React from "react";
import { Link } from "react-router-dom";

import biriyaniImage from "../assets/images/biriyani.jpg";
import chickenbiriyaniImage from"../assets/images/chickenbiriyani.jpg";
import chickenImage from "../assets/images/chicken.jpg";
import fishImage from "../assets/images/fish.jpg";
import muttonImage from "../assets/images/mutton.jpg";

function Home() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
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
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
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
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero-section" id="home">

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6 hero-content">

              <p className="small-title">
                <i className="bi bi-star-fill"></i>{" "}
                TASTY NON-VEG FOODS
              </p>

              <h1>
                Taste the <span>Spice</span>
                <br />
                Love the Grill
              </h1>

              <p className="hero-text">
                Enjoy delicious biryani, juicy chicken, mutton and fresh
                seafood prepared with love and authentic spices.
              </p>

              <Link
                to="/menu"
                className="btn btn-danger order-btn"
              >
                Explore Menu
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>


            {/* RIGHT */}
            <div className="col-lg-6">

              <div className="hero-image">

                <img
                  src={chickenbiriyaniImage}
                  alt="Delicious chicken biryani"
                  className="img-fluid"
                />

                <div className="image-label">
                  <i className="bi bi-heart-fill"></i>{" "}
                  Made with Love
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SPECIALTIES ================= */}
      <section className="categories-section">

        <div className="container">

          <div className="section-heading text-center">

            <p>OUR SPECIALTIES</p>

            <h2>Choose Your Favourite</h2>

            <span>
              Fresh flavours for every food lover
            </span>

          </div>


          <div className="row g-4 mt-3">

            {/* CHICKEN */}
            <div className="col-md-3 col-6">

              <div className="food-card">

                <img
                  src={chickenImage}
                  alt="Chicken"
                  className="img-fluid"
                />

                <h5>Chicken</h5>

                <p>Juicy & Spicy</p>

              </div>

            </div>


            {/* MUTTON */}
            <div className="col-md-3 col-6">

              <div className="food-card">

                <img
                  src={muttonImage}
                  alt="Mutton"
                  className="img-fluid"
                />

                <h5>Mutton</h5>

                <p>Rich & Delicious</p>

              </div>

            </div>


            {/* FISH */}
            <div className="col-md-3 col-6">

              <div className="food-card">

                <img
                  src={fishImage}
                  alt="Fish"
                  className="img-fluid"
                />

                <h5>Fish</h5>

                <p>Fresh & Tasty</p>

              </div>

            </div>


            {/* BIRYANI */}
            <div className="col-md-3 col-6">

              <div className="food-card">

                <img
                  src={biriyaniImage}
                  alt="Biryani"
                  className="img-fluid"
                />

                <h5>Biryani</h5>

                <p>Authentic Flavours</p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OFFER ================= */}
      <section className="offers-section">

        <div className="container text-center">

          <p className="small-title">
            SPECIAL OFFER
          </p>

          <h2>
            Delicious Food,
            <br />
            Happy Moments
          </h2>

          <p>
            Enjoy amazing food and special offers at Spice & Grill.
          </p>

          <Link
            to="/offers"
            className="btn btn-warning"
          >
            View Offers
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="restaurant-footer">

        <div className="container">

          <div className="row g-4">

            {/* ABOUT */}
            <div className="col-lg-5">

              <h3>🌶️ Spice & Grill</h3>

              <p>
                Fresh ingredients, authentic spices and delicious food
                made with love.
              </p>

            </div>


            {/* LINKS */}
            <div className="col-lg-3">

              <h5>Quick Links</h5>

              <div className="footer-links">

                <Link to="/">Home</Link>

                <Link to="/menu">Menu</Link>

                <Link to="/offers">Offers</Link>

                <Link to="/contact">Contact</Link>

              </div>

            </div>


            {/* CONTACT */}
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

    </>
  );
}

export default Home;
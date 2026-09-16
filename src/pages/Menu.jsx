import React from "react";
import { Link } from "react-router-dom";

import chickenbiriyaniImage from "../assets/images/chickenbiriyani.jpg";
import muttonbiriyaniImage from "../assets/images/muttonbiriyani.jpg";
import eggbiriyaniImage from "../assets/images/eggbiriyani.jpg";
import chicken65Image from "../assets/images/chicken65.jpg";
import chickenlollipopImage from "../assets/images/chickenlollipop.jpg";
import tandooriImage from "../assets/images/tandoori.jpg";
import fishfryImage from "../assets/images/fishfry.jpg";
import chillichickenImage from "../assets/images/chillichicken.jpg";
import paneerImage from "../assets/images/paneer.jpg";
import chickenfriedriceImage from "../assets/images/chickenfriedrice.jpg";
import gobimanchurianImage from "../assets/images/gobimanchurian.jpg";
import friesImage from "../assets/images/fries.jpg";

function Menu() {
  const menuItems = [
    {
      name: "Chicken Biryani",
      price: "₹180",
      image: chickenbiriyaniImage,
      description: "Delicious chicken biryani with flavorful rice.",
    },
    {
      name: "Mutton Biryani",
      price: "₹250",
      image: muttonbiriyaniImage,
      description: "Rich and delicious mutton biryani with aromatic spices.",
    },
    {
      name: "Egg Biryani",
      price: "₹150",
      image: eggbiriyaniImage,
      description: "Flavorful biryani served with perfectly cooked eggs.",
    },
    {
      name: "Chicken 65",
      price: "₹150",
      image: chicken65Image,
      description: "Crispy and spicy chicken 65 with special masala.",
    },
    {
      name: "Chicken Lollipop",
      price: "₹180",
      image: chickenlollipopImage,
      description: "Juicy and crispy chicken lollipop with tasty spices.",
    },
    {
      name: "Tandoori Chicken",
      price: "₹220",
      image: tandooriImage,
      description: "Smoky and juicy chicken grilled with Indian spices.",
    },
    {
      name: "Fish Fry",
      price: "₹200",
      image: fishfryImage,
      description: "Fresh fish marinated with special spices and fried.",
    },
    {
      name: "Chilli Chicken",
      price: "₹190",
      image: chillichickenImage,
      description: "Spicy chilli chicken with onion and capsicum.",
    },
    {
      name: "Paneer Butter Masala",
      price: "₹170",
      image: paneerImage,
      description: "Soft paneer cooked in creamy and buttery gravy.",
    },
    {
      name: "Chicken Fried Rice",
      price: "₹160",
      image: chickenfriedriceImage,
      description: "Delicious fried rice with chicken and fresh vegetables.",
    },
    {
      name: "Gobi Manchurian",
      price: "₹130",
      image: gobimanchurianImage,
      description: "Crispy cauliflower tossed in spicy Manchurian sauce.",
    },
    {
      name: "French Fries",
      price: "₹100",
      image: friesImage,
      description: "Golden crispy French fries served hot and fresh.",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
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
                <Link className="nav-link active" to="/menu">
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

      {/* MENU */}
      <main className="menu-page">

        <section className="menu-heading">
          <div className="container text-center">
            <p className="small-title">OUR MENU</p>

            <h1>
              Delicious <span>Food</span>
            </h1>

            <p>
              Explore our tasty collection of freshly prepared dishes.
            </p>
          </div>
        </section>

        {/* 12 CARDS */}
        <section className="pb-5">
          <div className="container">
            <div className="row g-4">

              {menuItems.map((item, index) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  key={index}
                >
                  <div className="menu-card h-100">

                    {/* FOOD IMAGE - img-fluid */}
                    <div className="menu-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid menu-image"
                      />
                    </div>

                    {/* CARD CONTENT */}
                    <div className="menu-content">
                      <h3>{item.name}</h3>

                      <p className="menu-description">
                        {item.description}
                      </p>

                      <div className="menu-bottom">
                        <span className="menu-price">
                          {item.price}
                        </span>

                        <Link
                          to="/contact"
                          className="btn btn-danger rounded-pill px-3"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="offer-cta">
        <div className="container text-center">
          <p className="small-title">HUNGRY?</p>

          <h2>
            Good Food Starts <span>Here!</span>
          </h2>

          <p>
            Order your favourite dishes and enjoy delicious food.
          </p>

          <Link to="/contact" className="cta-btn">
            Order Now
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="restaurant-footer">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-5">
              <h3>🌶️ Spice & Grill</h3>

              <p>
                Fresh ingredients, authentic spices and delicious
                food made with love.
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
    </>
  );
}

export default Menu;
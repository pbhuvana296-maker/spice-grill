import React from "react";
import { Link } from "react-router-dom";

import chickenbiriyaniImage from "../assets/images/chickenbiriyani.jpg";
import muttonbiriyaniImage from "../assets/images/muttonbiriyani.jpg";
import chicken65Image from "../assets/images/chicken65.jpg";
import chickenlollipopImage from "../assets/images/chickenlollipop.jpg";
import fishImage from "../assets/images/fish.jpg";
import chickenfriedriceImage from "../assets/images/chickenfriedrice.jpg";

function Offers() {
  const offers = [
    {
      id: 1,
      name: "Chicken Biryani",
      offer: "20% OFF",
      description:
        "Enjoy our delicious chicken biryani with aromatic rice and special spices.",
      price: "₹144",
      oldPrice: "₹180",
      image: chickenbiriyaniImage,
    },
    {
      id: 2,
      name: "Mutton Biryani",
      offer: "25% OFF",
      description:
        "Rich and flavorful mutton biryani prepared with tender mutton and fresh spices.",
      price: "₹188",
      oldPrice: "₹250",
      image: muttonbiriyaniImage,
    },
    {
      id: 3,
      name: "Chicken 65",
      offer: "15% OFF",
      description:
        "Crispy and spicy Chicken 65 made with our special masala.",
      price: "₹128",
      oldPrice: "₹150",
      image: chicken65Image,
    },
    {
      id: 4,
      name: "Chicken Lollipop",
      offer: "20% OFF",
      description:
        "Juicy and crispy chicken lollipop served hot with tasty spices.",
      price: "₹144",
      oldPrice: "₹180",
      image: chickenlollipopImage,
    },
    {
      id: 5,
      name: "Fish Fry",
      offer: "15% OFF",
      description:
        "Fresh fish marinated with special spices and fried until crispy.",
      price: "₹170",
      oldPrice: "₹200",
      image: fishImage,
    },
    {
      id: 6,
      name: "Chicken Fried Rice",
      offer: "20% OFF",
      description:
        "Delicious chicken fried rice prepared with fresh vegetables and spices.",
      price: "₹128",
      oldPrice: "₹160",
      image: chickenfriedriceImage,
    },
  ];

  return (
    <div className="offers-page">

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
            data-bs-target="#restaurantNavbar"
            aria-controls="restaurantNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="restaurantNavbar"
          >
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
                <Link className="nav-link active" to="/offers">
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


      {/* ================= OFFER HEADER ================= */}
      <section className="offers-header">
        <div className="container text-center">

          <p className="small-title">
            SPECIAL DEALS
          </p>

          <h1>
            Delicious <span>Offers</span>
          </h1>

          <p>
            Enjoy your favourite dishes from Spice & Grill
            at special prices. Fresh food, great taste and
            amazing deals!
          </p>

        </div>
      </section>


      {/* ================= OFFER CARDS ================= */}
      <section className="pb-5">
        <div className="container">

          <div className="row g-4">

            {offers.map((item) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6"
                key={item.id}
              >

                <div className="offer-card">

                  {/* IMAGE */}
                  <div className="offer-image-wrapper">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid offer-image"
                    />

                    <div className="offer-badge">
                      {item.offer}
                    </div>

                  </div>


                  {/* CONTENT */}
                  <div className="offer-content">

                    <h3>{item.name}</h3>

                    <p>
                      {item.description}
                    </p>

                    <div className="offer-price">

                      <span className="current-price">
                        {item.price}
                      </span>

                      <span className="old-price">
                        {item.oldPrice}
                      </span>

                    </div>

                    <Link
                      to="/contact"
                      className="btn offer-btn"
                    >
                      Order Now
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="offer-cta">
        <div className="container text-center">

          <h2>
            Hungry for <span>More?</span>
          </h2>

          <p>
            Explore our complete menu and discover
            more delicious dishes.
          </p>

          <Link
            to="/menu"
            className="btn cta-btn"
          >
            View Full Menu
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="restaurant-footer">

        <div className="container">

          <div className="row g-4">

            <div className="col-lg-5 col-md-6">

              <h3>
                🌶️ Spice & Grill
              </h3>

              <p>
                Bringing delicious non-veg flavours
                to your table with fresh ingredients,
                authentic spices and lots of love.
              </p>

            </div>


            <div className="col-lg-3 col-md-6">

              <h5>
                Quick Links
              </h5>

              <div className="footer-links">

                <Link to="/">
                  Home
                </Link>

                <Link to="/menu">
                  Menu
                </Link>

                <Link to="/offers">
                  Offers
                </Link>

                <Link to="/contact">
                  Contact
                </Link>

              </div>

            </div>


            <div className="col-lg-4 col-md-6">

              <h5>
                Contact
              </h5>

              <p>
                <i className="bi bi-geo-alt me-2"></i>
                123 Food Street, Madurai
              </p>

              <p>
                <i className="bi bi-telephone me-2"></i>
              <p>📞 +91 98765 57948</p>
              </p>

              <p>
                <i className="bi bi-envelope me-2"></i>
                spicegrill@gmail.com
              </p>

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

export default Offers;
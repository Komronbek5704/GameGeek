import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import Products from "./components/Products/Products.jsx";
import Product from "./components/Product/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import logo from "../public/logo.svg";
import phone from "../public/phone.svg";
import location from "../public/location.svg";  

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <header>
          <div className="header-container">
            <div className="logo">
              <img className="logo-img" src={logo} alt="" />
              <img className="phone-img" src={phone} alt="" />
              <p>+ 4904-049-950</p>
            </div>
            <div className="header-text">
              <p>Get 50% Off on the Selected items</p>
              <span className="line"></span>
              <p>Shop now</p>
            </div>
            <div className="inputs">
              <div className="lang-menu">
                <div className="selected-lang">
                  English
                </div>
                <ul>
                  <li>
                    <Link to="#" className="de">German</Link>
                  </li>
                  <li>
                    <Link to="" className="en">English</Link>
                  </li>
                  <li>
                    <Link to="" className="fr">French</Link>
                  </li>
                  <li>
                    <Link to="" className="ar">Arabic</Link>
                  </li>
                </ul>
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} />} />
          <Route path='/Products/:productId' element={<Product />} />
          <Route path='/Cart' element={<Cart products={cart} />} />
        </Routes>
      </Router>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="./public/footer.svg" alt="" />
            <h1>
              START YOUR GAME
              WITH THE BEST
            </h1>
          </div>

          <div className="service">
            <h1>Services</h1>
            <p>Gift Card</p>
            <p>Mobile App</p>
            <p>Shipping & Delivery</p>
            <p>Order Pickup</p>
            <p>Account Signup</p>
          </div>
          <div className="service">
            <h1>Help</h1>
            <p>ShopCart Help</p>
            <p>Returns</p>
            <p>Track Orders</p>
            <p>Contact Us</p>
            <p>Feedback</p>
            <p>Security & Fraud</p>
          </div>
          <div className="service">
            <h1>About Us</h1>
            <p>News & Blog</p>
            <p>Help</p>
            <p>Press Center</p>
          </div>
        </div>

        <p className="footer-line"></p>

        <div className="footer-bottom">
          <img src={logo} alt="" />
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Terms of Service</p>
          <p>All rights reserved by GameGeek | 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

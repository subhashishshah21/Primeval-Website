import React, { useContext } from "react";
import "../CSS/footer.css";
import { Link } from "react-router-dom";
import { COD, esewa, Fonepay, Khalti } from "../images/index";
import styleContext from "../context/styleContext";

function Footer() {
  const context = useContext(styleContext);
  const { yellowStyle, linkStyle } = context;
  return (
    <>
      <div className="footer ">
        <div className="items">
          <h6 className="footer-header">
            {" "}
            <strong>NEWSLETTER</strong>{" "}
          </h6>
          <p className="footer-text">
            Subscribe Now to get <span style={yellowStyle}>5% offer</span> your
            next purchase
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="example@gmail.com"
              aria-label="Username"
            />
            <span className="input-group-text bg-warning  ">
              {" "}
              <strong>SUBSCRIBE</strong>{" "}
            </span>
          </div>
        </div>
        <div className="items">
          <h6 className="footer-header">
            {" "}
            <strong>CATEGORIES</strong>{" "}
          </h6>
          <div className="footer-text">
            <p>
              {" "}
              <Link to="/shop" style={linkStyle}>
                {" "}
                <span>Reward Shop</span>{" "}
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/shop" style={linkStyle}>
                {" "}
                <span>Electronics</span>{" "}
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/shop" style={linkStyle}>
                {" "}
                <span>Customer Review</span>{" "}
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/shop" style={linkStyle}>
                {" "}
                <span>Upcomming</span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="items">
          <h6 className="footer-header">
            {" "}
            <strong>INFORMATION</strong>{" "}
          </h6>
          <div className="footer-text">
            <p>
              <Link to="/aboutus" style={linkStyle}>
                About us
              </Link>{" "}
            </p>
            <p>
              <Link to="/contactus" style={linkStyle}>
                Contact us
              </Link>{" "}
            </p>
            <p>
              <Link to="/cart" style={linkStyle}>
                Order and Return
              </Link>{" "}
            </p>
            <p>
              <Link to="termsandconditions" style={linkStyle}>
                {" "}
                <span>Term and Conditions</span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="items">
          <h6 className="footer-header">
            {" "}
            <strong>LOCATION</strong>{" "}
          </h6>
          <div className="footer-text">
            <p>
              <i style={yellowStyle} className="fas fa-map-marker-alt"></i>{" "}
              Sankhamul, New Baneshwor
            </p>
            <p>
              <i style={yellowStyle} className="fas fa-phone"></i> +977
              9843810334
            </p>
            <p>
              <i style={yellowStyle} className="far fa-envelope"></i>{" "}
              sample@example.com
            </p>
          </div>
        </div>
        <div className="items">
          <h6 className="footer-header">
            {" "}
            <strong>SOCIAL</strong>{" "}
          </h6>
          <div className="footer-text">
            <p>
              <Link to="www.facebook.com" style={linkStyle} target="_blank">
                {" "}
                <i className="fab fa-facebook-square"></i> Facebook
              </Link>
            </p>
            <p>
              <Link to="www.instagram.com" style={linkStyle}>
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </p>
            <p>
              <Link to="www.youtube.com" target="_blank" style={linkStyle}>
                <i className="fab fa-youtube"></i> Youtube
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="payment-logos">
          <img src={COD} alt="" style={{ height: "80px" }} />
          <img src={esewa} alt="" />
          <img src={Fonepay} alt="" />
          <img src={Khalti} alt="" style={{ height: "80px" }} />
        </div>
        <div className="footer-footer-text">
          Copyright @2021 <span style={yellowStyle}>All rights reserved</span> .
          Privace Policy Term of use
        </div>
      </div>
    </>
  );
}

export default Footer;

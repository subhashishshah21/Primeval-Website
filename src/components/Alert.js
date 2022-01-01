import React from "react";
import Chevron from "react-chevron";
import { Link } from "react-router-dom";
import "../CSS/alert.css";

function Alert() {
  return (
    <div
      className="alert alert-secondary alert-dismissible fade show text-center"
      role="alert"
    >
      <strong>10% OFF IN FANTECH KEYBOARD.</strong>{" "}
      <Link className="link" to="/shop">
        Shop Now <Chevron direction={"right"} />
      </Link>
    </div>
  );
}

export default Alert;

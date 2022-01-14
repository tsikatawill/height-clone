import React from "react";
import "../../styles/Navbar.min.css";
import Logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div
        className="container
      py-2"
      >
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="mx-2">Height</span>
        </div>
        <ul className="main-nav d-flex align-items-center justify-content-between">
          <li className="link br-1">Product</li>
          <li className="link br-1">Pricing</li>
          <li className="link br-1">Workflows</li>
          <li className="link br-1">Integrations</li>
          <li className="link br-1">About us</li>
          <li>
            <ul className="d-flex align-items-center justify-content-between">
              <li className="link br-1">Login</li>
              <li className="link br-1 text--purple">Sign up</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

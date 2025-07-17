import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">Conscious Neurons</div>

      {/* Hamburger Menu Icon */}
      <button className="hamburger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu} end>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/services" className="nav-link" onClick={closeMenu}>
          Services
        </NavLink>
      </nav>
    </header>
  );
}

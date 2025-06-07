import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <nav style={{ background: "#1976d2", padding: "1rem" }}>
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>
        Maulik Insurance
      </span>
      <span style={{ float: "right" }}>
        <a href="#" onClick={() => onNavigate("home")} style={{ color: "#fff", margin: "0 1rem" }}>Home</a>
        <a href="#" onClick={() => onNavigate("about")} style={{ color: "#fff", margin: "0 1rem" }}>About</a>
        <a href="#" onClick={() => onNavigate("contact")} style={{ color: "#fff" }}>Contact</a>
      </span>
    </nav>
  );
}
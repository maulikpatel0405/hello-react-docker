import React from "react";

export default function HeroSection() {
  return (
    <section style={{ padding: "3rem 1rem", background: "#e3f2fd", textAlign: "center" }}>
      <h1>Welcome to Maulik Insurance</h1>
      <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
        Your Protection, Our Priority — Trusted Insurance for Every Stage of Life.
      </p>
      <a href="/contact" style={{
        background: "#1976d2", color: "#fff", padding: "0.75rem 2rem",
        borderRadius: "4px", textDecoration: "none", fontWeight: "bold"
      }}>
        Get a Quote
      </a>
    </section>
  );
}
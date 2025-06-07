import React from "react";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>Contact Information</h1>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
        <li><strong>Name:</strong> Maulik Patel</li>
        <li><strong>Email:</strong> maulikdevpatel@gmail.com</li>
        <li><strong>Phone:</strong> +1 647-667-2167</li>
        <li><strong>Address:</strong> 21 Mortimer Dr, Brampton, ON, Canada</li>
      </ul>
    </div>
  );
}
import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Full Name: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>Contact Form</h1>
      <h2 style={{ color: "#2e7d32", marginBottom: "1.5rem" }}>
        Thank you for visiting our website! We appreciate your presence and hope you have a wonderful experience here.
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from "react";
export default function FormulaireInscription({ theme = "light", onSubmit }) {
  const [form, setForm] = useState({ nom: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmit) onSubmit(form);
  };

  const style = {
    background: theme === "dark" ? "#333333" : "#FAF9F6",
    color: theme === "dark" ? "#FAF9F6" : "#123456",
    padding: "2rem 1rem",
    borderRadius: "10px",
    maxWidth: 400,
    margin: "2rem auto",
    boxShadow: theme === "dark" ? "0 2px 8px #2228" : "0 2px 8px #B88A2A22",
  };
  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    margin: "0.5rem 0 1rem 0",
    border: `1px solid ${theme === "dark" ? "#8E8E8E" : "#B88A2A"}`,
    borderRadius: "5px",
    background: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#FAF9F6" : "#123456",
  };
  const buttonStyle = {
    background: "#B88A2A",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem",
  };

  return (
    <form style={style} onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <label>Nom</label>
      <input
        style={inputStyle}
        type="text"
        name="nom"
        value={form.nom}
        onChange={handleChange}
        required
      />
      <label>Email</label>
      <input
        style={inputStyle}
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label>Mot de passe</label>
      <input
        style={inputStyle}
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button style={buttonStyle} type="submit">S'inscrire</button>
      {submitted && <p style={{ color: "#B88A2A", marginTop: 10 }}>Inscription envoyée !</p>}
    </form>
  );
}

import React from "react";

export default function Button({ children, onClick, style = {}, theme = "light" }) {
  const baseStyle = {
    padding: "0.5rem 1.2rem",
    margin:"0 .4rem",
    fontSize: "1.3rem",
    border: "none",
    borderRadius: "1.4rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  };

  const themeStyle = theme === "dark"
    ? { background: "#222", color: "#fff" }
    : { background: "#f0f0f0", color: "#222" };

  return (
    <button style={{ ...baseStyle, ...themeStyle, ...style }} onClick={onClick}>
      {children}
    </button>
  );
}

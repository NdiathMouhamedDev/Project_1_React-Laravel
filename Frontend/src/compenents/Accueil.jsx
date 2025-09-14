import React from "react";

export default function Accueil({ title = "Bienvenue !", description = "Ceci est la page d'accueil.", theme = "light", children }) {
    const style = {
        background: theme === "dark" ? "#23272f" : "#fff",
        color: theme === "dark" ? "#fff" : "#23272f",
        padding: "10rem 10rem",
        borderRadius: "10px",
        boxShadow: theme === "dark" ? "0 2px 8px #1118" : "0 2px 8px #ccc8",
        maxWidth: "100vw",
        height:"100vh",
        margin: "0",
        textAlign: "center",
    };
    return (
        <section style={style}>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </section>
    );
}
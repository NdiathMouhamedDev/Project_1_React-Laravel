export default function Footer({ theme = "light" }) {
  const style = {
    background: theme === "dark" ? "#123456" : "#B88A2A",
    color: theme === "dark" ? "#FAF9F6" : "#fff",
    textAlign: "center",
    padding: "1.2rem 0",
    marginTop: "3rem",
    fontWeight: 500,
    letterSpacing: 1,
  };
  return (
    <footer style={style}>
      © {new Date().getFullYear()} MonSite. Tous droits réservés.
    </footer>
  );
}

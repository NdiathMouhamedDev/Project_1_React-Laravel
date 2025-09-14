import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

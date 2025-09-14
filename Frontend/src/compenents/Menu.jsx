import React from "react";

export default function Menu({ items = [], theme = "light", onItemClick }) {
  const style = {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const itemStyle = {
    cursor: "pointer",
    color: theme === "dark" ? "#FAF9F6" : "#123456",
    fontWeight: 500,
    transition: "color 0.2s, border-bottom 0.2s",
    borderBottom: `2px solid transparent`,
    padding: "0.2rem 0.5rem",
  };
  const itemHoverStyle = {
    color: theme === "dark" ? "#B88A2A" : "#B88A2A",
    borderBottom: `2px solid #B88A2A`,
  };

  const [hovered, setHovered] = React.useState(null);

  return (
    <ul style={style}>
      {items.map((item, idx) => (
        <li
          key={idx}
          style={hovered === idx ? { ...itemStyle, ...itemHoverStyle } : itemStyle}
          onClick={() => onItemClick && onItemClick(item)}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

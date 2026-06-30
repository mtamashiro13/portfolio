import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        background: "#fafafa",
        padding: "1.5rem",
        textAlign: "center",
        fontSize: "0.875rem",
        color: "#525252",
      }}
    >
      © {new Date().getFullYear()} Matheus Tamashiro's Portfolio.
    </footer>
  );
}

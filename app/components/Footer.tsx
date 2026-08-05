import { Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          © {new Date().getFullYear()} Matheus Tamashiro's Portfolio.
        </Typography>
      </Container>
    </footer>
  );
}

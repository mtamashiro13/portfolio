import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function SideCard() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          top: "32px",
          maxHeight: "calc(100vh - 64px)",
        }}
      >
        <img
          src="https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=1024&width=3456&height=5184"
          alt="ProfileImage"
          style={{
            width: "100%",
            objectFit: "cover",
            aspectRatio: 1,
            borderRadius: "8px",
          }}
        />
        <Typography variant="h2" sx={{ color: "text.opposite", paddingTop: 2 }}>
          Matheus Tamashiro
        </Typography>
        <Typography variant="h3" sx={{ color: "#727272" }}>
          Software Engineer
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", py: 2 }}>
          Especializado em React, Next.js e AWS, construindo produtos digitais
          de alta disponibilidade para o setor financeiro.
        </Typography>
        <Button variant="contained" color="primary">
          <DownloadIcon />
          Download CV
        </Button>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, py: 2 }}>
          <Button variant="text" color="primary">
            <LinkedInIcon />
          </Button>
          <Button variant="text" color="primary">
            <GitHubIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

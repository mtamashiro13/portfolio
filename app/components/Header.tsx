"use client";

import { Box, Container, IconButton, Tooltip } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home", icon: HomeOutlinedIcon },
  { label: "Experience", href: "#experience", icon: WorkOutlinedIcon },
  { label: "Skills", href: "#skills", icon: EditOutlinedIcon },
  { label: "Tools", href: "#tools", icon: BuildOutlinedIcon },
] as const;

export default function Header() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
      }}
    >
      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 0.5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.alt",
          borderRadius: 999,
          px: 1.5,
          py: 0.75,
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0px 2px 4px 0px rgba(255, 255, 255, 0.1)",
        }}
      >
        {navItems.map(({ label, href, icon: Icon }) => (
          <Tooltip
            key={href}
            title={label}
            placement="bottom"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#2a2827",
                  color: "#fff",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 1,
                },
              },
            }}
          >
            <IconButton
              component={Link}
              href={href}
              aria-label={label}
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                borderRadius: 2,
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Container>
  );
}

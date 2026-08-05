import { Box, Button, Typography } from "@mui/material";
import React from "react";
import StatsSection from "./components/StatsSection";
export default function Home() {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ddd" }}>
      <Typography variant="h1">
        SOFTWARE
        <br /> ENGINEER
      </Typography>
      <Typography variant="body1">
        Desenvolvedor Frontend especializado em aplicações web utilizando React,
        Next.js e TypeScript, atuando no desenvolvimento de produtos digitais de
        alta disponibilidade no setor financeiro. Experiência em arquitetura
        frontend, integrações com APIs REST, CMS Headless, observabilidade,
        CI/CD e infraestrutura AWS. Atuação em squads ágeis utilizando Kanban e
        scrum, desenvolvendo soluções focadas em performance, escalabilidade e
        experiência do usuário.
      </Typography>
      <StatsSection />
    </Box>
  );
}

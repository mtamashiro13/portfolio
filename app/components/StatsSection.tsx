"use client";

import { Grid, Stack, Typography } from "@mui/material";
import AnimatedCounter from "./AnimatedCounter";

const PROJECTS_COMPLETED = 40;

const stats = [
  {
    value: new Date().getFullYear() - 2020,
    label: "ANOS DE EXPERIÊNCIA",
  },
  {
    value: PROJECTS_COMPLETED,
    label: "PROJETOS ENTREGADOS",
  },
] as const;

export default function StatsSection() {
  return (
    <Grid container spacing={3} sx={{ my: 4 }}>
      {stats.map((stat) => (
        <Grid key={stat.label} size={{ xs: 6 }}>
          <Stack spacing={0.5}>
            <AnimatedCounter
              value={stat.value}
              variant="h2"
              sx={{ fontWeight: 700, lineHeight: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

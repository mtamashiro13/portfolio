import { Box, Grid, Typography } from "@mui/material";
import type SvgIcon from "@mui/material/SvgIcon";

export type SkillItem = {
  label: string;
  icon: typeof SvgIcon;
};

type SkillGridProps = {
  skills: readonly SkillItem[];
};

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <Grid container spacing={2}>
      {skills.map(({ label, icon: Icon }) => (
        <Grid key={label} size={{ xs: 6, sm: 4, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              height: "100%",
              px: 2,
              py: 1.5,
              borderRadius: 2,
              backgroundColor: "background.alt",
              border: "1px solid",
              borderColor: "rgba(255, 255, 255, 0.08)",
              transition: "background-color 0.25s ease, transform 0.25s ease",
              "&:hover": {
                backgroundColor: "rgba(249, 204, 70, 0.06)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                flexShrink: 0,
                borderRadius: "50%",
                backgroundColor: "rgba(249, 204, 70, 0.1)",
                color: "primary.main",
              }}
            >
              <Icon fontSize="small" />
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "text.highlight", fontWeight: 500 }}
            >
              {label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

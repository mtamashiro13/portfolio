import { Box, Typography } from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import SkillGrid, { type SkillItem } from "./SkillGrid";

const tools: readonly SkillItem[] = [
  { label: "AWS (S3, EC2, ECS, RDS)", icon: CloudOutlinedIcon },
  { label: "Terraform / Terragrunt (IaC)", icon: LayersOutlinedIcon },
  { label: "Docker", icon: ViewInArOutlinedIcon },
  { label: "GitLab CI/CD", icon: AutorenewOutlinedIcon },
  { label: "GitHub Actions", icon: GitHubIcon },
  { label: "Datadog", icon: MonitorHeartOutlinedIcon },
  { label: "Strapi CMS", icon: StorageOutlinedIcon },
  { label: "Vercel", icon: RocketLaunchOutlinedIcon },
  { label: "WordPress", icon: LanguageOutlinedIcon },
  { label: "Postman & Swagger", icon: ApiOutlinedIcon },
] as const;

export default function ToolsSection() {
  return (
    <Box id="tools" component="section" sx={{ mt: 8 }}>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          mb: 1,
          fontSize: { xs: "2.5rem", md: "64px" },
        }}
      >
        <Box component="span" sx={{ color: "text.highlight" }}>
          Tools &
        </Box>{" "}
        <Box component="span" sx={{ color: "text.secondary" }}>
          Platforms
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.primary", mb: 4, maxWidth: 560 }}
      >
        Infraestrutura, ferramentas de dev e workflows que utilizo no dia a
        dia em produção.
      </Typography>

      <SkillGrid skills={tools} />
    </Box>
  );
}

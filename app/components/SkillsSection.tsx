import { Box, Typography } from "@mui/material";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import SkillGrid, { type SkillItem } from "./SkillGrid";

const skills: readonly SkillItem[] = [
  { label: "React.js", icon: AccountTreeOutlinedIcon },
  { label: "Next.js", icon: WebOutlinedIcon },
  { label: "TypeScript", icon: DataObjectOutlinedIcon },
  { label: "Angular", icon: ExtensionOutlinedIcon },
  { label: "Frontend Architecture", icon: ArchitectureOutlinedIcon },
  { label: "Design Systems", icon: PaletteOutlinedIcon },
  { label: "SSR / ISR", icon: DnsOutlinedIcon },
  { label: "REST APIs", icon: ApiOutlinedIcon },
  { label: "Redux", icon: SyncAltOutlinedIcon },
  { label: "Testing (Jest/Cypress)", icon: BugReportOutlinedIcon },
] as const;

export default function SkillsSection() {
  return (
    <Box id="skills" component="section" sx={{ mt: 8 }}>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          mb: 1,
          fontSize: { xs: "2.5rem", md: "64px" },
        }}
      >
        <Box component="span" sx={{ color: "text.highlight" }}>
          Frontend
        </Box>{" "}
        <Box component="span" sx={{ color: "text.secondary" }}>
          Skills
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.primary", mb: 4, maxWidth: 560 }}
      >
        Principais competências que utilizo na construção de produtos digitais
        de alta disponibilidade.
      </Typography>

      <SkillGrid skills={skills} />
    </Box>
  );
}

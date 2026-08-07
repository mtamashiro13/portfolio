import { Box, Stack, Typography } from "@mui/material";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import React from "react";

const EXPERIENCE_START_YEAR = 2020;
const yearsOfExperience = new Date().getFullYear() - EXPERIENCE_START_YEAR;

const experiences = [
  {
    role: "Front-end Web",
    company: "Banco Bari",
    period: "2025 – Atualmente",
    highlights: [
      "Desenvolvimento de features em React/Next.js com foco em performance e renderização SSR/ISR, utilizando TypeScript, Vite, Docker e APIs RESTful.",
      "Administração de infraestrutura frontend em ambiente AWS (S3, EC2, ECS, ECR, CloudFront, RDS) via Terraform, com pipelines de CI/CD no GitLab.",
      "Manutenção de aplicações legadas em Angular e utilização do Strapi como CMS em três projetos com infraestrutura separada.",
      "Integração com APIs RESTful e microsserviços, incluindo a implementação de agentes de IA (Claude e Gemini).",
      "Monitoramento de aplicações em produção via Datadog, com atuação em deploys, troubleshooting e resolução de incidentes seguindo fluxo Kanban.",
    ],
    href: null,
  },
  {
    role: "Front-end Jr.",
    company: "Inunda",
    period: "2021 – 2024",
    highlights: [
      "Desenvolvimento de sites a partir de layouts do Figma utilizando WordPress e plugins, com stacks em JavaScript, HTML, CSS e PHP.",
      "Suporte a provedores de servidor, CPanel e FTP, além de orçamentos e kick-offs com contato direto com clientes do início ao fim do projeto.",
      "Atendimento a clientes como NewHotel, Grupo Condor (Zonta), Tintas Alessi, Viação Sorriso, Grupo Noster, NHS e Trisoft.",
    ],
    href: null,
  },
  {
    role: "Freelancer",
    company: "Freelance",
    period: "2020 – Atualmente",
    highlights: [
      "Criação e suporte de e-commerces e sites institucionais, incluindo manutenção de servidor e hospedagem.",
      "Prototipagem no Figma e desenvolvimento orientado por Sprints e Kanban.",
    ],
    href: null,
  },
] as const;

export default function ExperienceSection() {
  return (
    <Box id="experience" component="section" sx={{ mt: 8 }}>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          mb: 6,
          fontSize: { xs: "2.5rem", md: "64px" },
        }}
      >
        <Box component="span" sx={{ color: "text.highlight" }}>
          {yearsOfExperience} Anos de
        </Box>
        <br />
        <Box component="span" sx={{ color: "text.secondary" }}>
          Experiência
        </Box>
      </Typography>

      <Stack spacing={5}>
        {experiences.map((experience) => {
          const isLink = Boolean(experience.href);

          return (
            <Box
              key={experience.company}
              component={isLink ? "a" : "div"}
              href={experience.href ?? undefined}
              target={isLink ? "_blank" : undefined}
              rel={isLink ? "noopener noreferrer" : undefined}
              aria-label={isLink ? `Visit ${experience.company}` : undefined}
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                borderRadius: 3,
                p: { xs: 2, md: 3 },
                m: { xs: -2, md: -3 },
                transition: "background-color 0.25s ease",
                ...(isLink && {
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(249, 204, 70, 0.06)",
                  },
                  "&:hover .experience-arrow": {
                    transform: "translate(2px, -2px)",
                  },
                  "&:focus-visible": {
                    backgroundColor: "rgba(249, 204, 70, 0.06)",
                    outline: "2px solid",
                    outlineColor: "primary.main",
                    outlineOffset: 2,
                  },
                }),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "text.highlight",
                      fontWeight: 700,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    {experience.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "primary.main", fontWeight: 600, mt: 0.5 }}
                  >
                    {experience.role}
                  </Typography>
                </Box>

                {isLink && (
                  <NorthEastOutlinedIcon
                    className="experience-arrow"
                    aria-hidden="true"
                    sx={{
                      color: "primary.main",
                      flexShrink: 0,
                      mt: 0.5,
                      transition: "transform 0.25s ease",
                    }}
                  />
                )}
              </Box>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mt: 1, mb: 1.5 }}
              >
                {experience.period}
              </Typography>

              <Stack
                spacing={0.75}
                component="ul"
                sx={{ pl: 0, m: 0, listStyle: "none", maxWidth: 560 }}
              >
                {experience.highlights.map((highlight) => (
                  <Box
                    key={highlight}
                    component="li"
                    sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        mt: 0.9,
                        flexShrink: 0,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: "text.primary", lineHeight: 1.6 }}
                    >
                      {highlight}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

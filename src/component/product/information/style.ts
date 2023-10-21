import { Grid, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const TitleInformation = muiStyled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "48px",
  fontWeight: 700,
}));
export const ContentInformation = muiStyled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "48px",
}));

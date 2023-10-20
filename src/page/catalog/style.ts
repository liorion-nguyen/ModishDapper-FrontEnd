import { Grid, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const ContainerGridCatalog = muiStyled(Grid)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));

export const ItemProductGrid = muiStyled(Grid)(({ theme }) => ({
  padding: "0px 30px",
}));
export const ItemProductSpan = muiStyled("span")(({ theme }) => ({
  padding: "5px",
}));
export const Title = muiStyled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: "#C54343",
  lineHeight: "48px",
  fontWeight: 700,
}));

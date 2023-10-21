import { Grid, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const ProductGrid = muiStyled(Grid)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));

import { Grid, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const ProductGrid = muiStyled(Grid)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));

export const SizeProductGrid = muiStyled(Grid)(({ theme }) => ({
  padding: "10px",
  border: "1px solid #000000",
  borderRadius: "20px",
  width: "40px",
  textAlign: "center",
  margin: "0 5px",
  textTransform: "uppercase",
}));

export const TransportGrid = muiStyled(Grid)(({ theme }) => ({
  display: "flex",
}));
export const ItemTransportGrid = muiStyled(Grid)(({ theme }) => ({
  marginLeft: "10px",
}));

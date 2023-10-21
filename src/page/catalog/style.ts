import { Grid, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { Link } from "react-router-dom";
export const ContainerGrid = muiStyled(Grid)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));
export const ContainerGridRight = muiStyled(Grid)(({ theme }) => ({}));

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

export const CategoryTypoGrapphy = muiStyled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: "#212429",
  lineHeight: "120%",
  fontWeight: "bold",
  marginBottom: "10px",
}));
export const CategoryItemTypoGrapphy = muiStyled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#212429",
  lineHeight: "150%",
  padding: "5px 0",
}));

export const Href = muiStyled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
}));

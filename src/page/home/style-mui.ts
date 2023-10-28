import { Box, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
  display: "flex",
}));

export const StyleImgInBox = muiStyled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyleImgNav = muiStyled("img")(({ theme }) => ({
  width: "550px",
  height: "750px",
  borderRadius: "0px 294.5px 0px 0px",
}));

export const StyleMain = muiStyled("main")(({ theme }) => ({
  margin: "0 auto",
  padding: "40px 120px",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  maxWidth: "1440px",
}));

export const StyleNavLeft = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
}));

export const StyleNavBar = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StylePNav = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "36px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#212429",
}));

export const StyleANav = muiStyled("a")(({ theme }) => ({
  width: "176px",
  height: "53px",
  borderRadius: "20px",
  color: "#212429",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
}));

export const StyleANavFirst = muiStyled(StyleANav)(({ theme }) => ({
  background: "#F6B750",
}));

export const StyleANavLast = muiStyled(StyleANav)(({ theme }) => ({
  border: "1px solid #212429",
}));

export const StyleRefNav = muiStyled(StyleBoxRow)(({ theme }) => ({
  gap: "50px",
}));

export const StyleTitle = muiStyled("h3")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "38px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#212429",
}));

export const StyleBoxDeal = muiStyled(StyleBoxColumn)(({ theme }) => ({
  gap: "30px",
}));

export const StylePDeal = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#212429",
}));

export const StyleADeal = muiStyled("a")(({ theme }) => ({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  display: "flex",
}));

export const StyleImgDeal = muiStyled(StyleImgInBox)(({ theme }) => ({
  borderRadius: "50%",
}));

export const StyleItemDeal = muiStyled(StyleBoxColumn)(({ theme }) => ({
  alignItems: "center",
  gap: "20px",
}));

export const StyleContentDeal = muiStyled(StyleBoxRow)(({ theme }) => ({
  justifyContent: "space-between",
}));

export const StyleBoxImgTop = muiStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  position: "relative",
}));

export const StyleImgTop = muiStyled(StyleImgInBox)(({ theme }) => ({
  borderRadius: "12px",
  ':hover': {
    cursor: 'pointer'
  }
}));

export const StylePNameTop = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: "400",
  letterSpacing: 0,
  color: "#212429",
}));

export const StylePPriceTop = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: 0,
  color: "#212429",
}));

export const StyleBoxTop = muiStyled("a")(({ theme }) => ({
  width: '300px',
  maxWidth: '300px',
  display: "flex !important",
  flexDirection: "column",
  gap: "15px",
  textDecoration: "none",
}));

export const StyleBoxContentTop = muiStyled(StyleBoxColumn)(({ theme }) => ({
  gap: "10px",
}));

export const StyleBoxPriceTop = muiStyled(StyleBoxRow)(({ theme }) => ({
  justifyContent: "space-between",
  width: "-webkit-fill-available",
}));

export const StyleEleInImgTop = muiStyled(StyleBoxRow)(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  padding: "15px",
  justifyContent: "space-between",
  width: "-webkit-fill-available",
}));

export const StyleNumberDiscountTop = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "700",
  letterSpacing: 0,
  color: "#FFFFFF",
  background: "#EF3C3C",
  borderRadius: "20px",
  textAlign: "center",
  padding: "5px 20px",
  height: "fit-content",
}));

export const StyleIconTop = muiStyled("img")(({ theme }) => ({
  padding: "8px",
  borderRadius: "50%",
}));

export const StyleIconEyeTop = muiStyled(StyleIconTop)(({ theme }) => ({
  background: "#F6B750",
}));

export const StyleIconLoveTop = muiStyled(StyleIconTop)(({ theme }) => ({
  background: "#FFFFFF",
}));

export const StyleBoxIconTop = muiStyled(StyleBoxColumn)(({ theme }) => ({
  gap: "10px",
}));

export const StyleBoxMoreTop = muiStyled(StyleBoxRow)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
}));

export const StyleButtonMoreTop = muiStyled("button")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: 0,
  color: "#212429",
  border: "1px solid #212429",
  borderRadius: "48px",
  width: "180px",
  height: "48px",
  background: "#FFFFFF",
}));

export const StyleAImgCollection = muiStyled("a")(({ theme }) => ({
  width: "475px",
  height: "475px",
  borderRadius: "24px",
  position: "relative",
}));

export const StyleImgCollection = muiStyled(StyleImgInBox)(({ theme }) => ({
  borderRadius: "24px",
}));

export const StyleNameCollection = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "700",
  color: "#FFFFFF",
  position: "absolute",
  bottom: "50px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "max-content",
}));

export const StyleGridNew = muiStyled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

export const StyleImgNew = muiStyled("img")(({ theme }) => ({
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  ':hover': {
    cursor: 'pointer'
  }
}));

export const StyleNameNew = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "400",
  color: "#212429",
}));

export const StyleBoxPriceNew = muiStyled(StyleBoxRow)(({ theme }) => ({
  gap: "10px",
}));

export const StylePriceNew = muiStyled("p")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "700",
  color: "#212429",
}));

export const StyleDiscountNew = muiStyled(StylePriceNew)(({ theme }) => ({
  color: "#D5541D",
}));

export const StyleASlide = muiStyled("a")(({ theme }) => ({
  width: "100%",
  height: "714px",
  margin: "50px 0",
}));

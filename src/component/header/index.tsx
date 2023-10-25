import { Box } from "@mui/material";

import User from "../../images/home/header/icon-user.svg";
import Heart from "../../images/home/header/icon-heart.svg";
import Cart from "../../images/home/header/icon-cart.svg";
import Logo from "../../images/home/header/logo.svg";
import {
  Container,
  StyleBoxLogo,
  StyleCart,
  StyleHeader,
  StyleImgLogo,
  StyleListIcon,
  StyleListText,
  StyleText,
} from "./style-mui";

export default function Header() {
  const items = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Flash Sale",
      href: "",
    },
    {
      name: "Sản phẩm",
      href: "",
    },
    {
      name: "Bộ sưu tập",
      href: "",
    },
  ];
  return (
    <StyleHeader>
      <Container>
        <StyleBoxLogo>
          <StyleImgLogo src={Logo} />
        </StyleBoxLogo>

        <StyleListText>
          {items.map((item) => (
            <StyleText href={item.href}>{item.name}</StyleText>
          ))}
        </StyleListText>

        <StyleListIcon>
          <Box>
            <img src={User} alt="" />
          </Box>
          <Box>
            <img src={Heart} alt="" />
          </Box>
          <Box sx={{ position: "relative" }}>
            <StyleCart data-count="3">
              <img src={Cart} alt="" />
            </StyleCart>
          </Box>
        </StyleListIcon>
      </Container>
    </StyleHeader>
  );
}

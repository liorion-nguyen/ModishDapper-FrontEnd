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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
      href: "/catalog",
    },
    {
      name: "Bộ sưu tập",
      href: "",
    },
  ];
  const purchase = useSelector((state: any) => state.purchase.purchase);
  

  const navigate = useNavigate();
  const handleCart = () => {
    navigate("./cart");
  }
  return (
    <StyleHeader>
      <Container>
        <StyleBoxLogo>
          <StyleImgLogo src={Logo} />
        </StyleBoxLogo>

        <StyleListText>
          {items.map((item) => (
            <StyleText href={item.href} key={item.name}>{item.name}</StyleText>
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
          <StyleCart data-count={purchase && Array.isArray(purchase.cart) ? purchase.cart.length : 0} onClick={handleCart}>
              <img src={Cart} alt="" />
            </StyleCart>
          </Box>
        </StyleListIcon>
      </Container>
    </StyleHeader>
  );
}

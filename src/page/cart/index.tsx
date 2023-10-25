import { Box, Grid, Typography } from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";
import {
  StyleAddMinuProduct,
  StyleBoxBottomPrice,
  StyleBoxChosse,
  StyleBoxContentProduct,
  StyleBoxInpTransport,
  StyleBoxLocation,
  StyleBoxParaProduct,
  StyleBoxSpaceBetween,
  StyleBoxTopPrice,
  StyleBreadcrumbs,
  StyleButtonPrice,
  StyleCard,
  StyleChosseTransport,
  StyleContactPrice,
  StyleContebtParaProduct,
  StyleFormCodePrice,
  StyleFormTransport,
  StyleGridPrice,
  StyleHr,
  StyleHrPrice,
  StyleIconNextPrice,
  StyleImgProduct,
  StyleInpHalfTransport,
  StyleInputCodePrice,
  StyleInputTransport,
  StyleItemProduct,
  StyleNameProduct,
  StylePBold16,
  StylePLocation,
  StylePRegular16,
  StylePTitlePrice,
  StyleParaProduct,
  StylePriceProduct,
  StyleSettingProduct,
  StyleTextBoldPrice,
  StyleTextParaProduct,
  StyleTextPrice,
  StyleTitle,
  StyleTrueChosseTransport,
} from "./style-mui";

import TransportIcon from "../../images/cart/transport/icon-transport.svg";
import EmailIcon from "../../images/cart/transport/icon-email.svg";
import Add from "@mui/icons-material/Add";
import Minu from "@mui/icons-material/Remove";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import Location from "@mui/icons-material/FmdGoodOutlined";
import { Link } from "@mui/material";

import "./index.css";
import { useNavigate } from "react-router-dom";

export function ProductInCart() {
  const navigate = useNavigate();
  const products = [
    {
      name: "Quần jean dài thẳng vừa vặn màu trắng",
      color: "white",
      size: "XS",
      quantity: 1,
      price: 999000,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lhd4cxpgxipfcd",
    },
    {
      name: "Sơ mi nam basic",
      color: "grey",
      size: "L",
      quantity: 2,
      price: 100000,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfzme3skayju1a",
    },
  ];

  const handlePriceProduct = () => {
    let s = 0;
    products.map((price) => {
      s = s + price.price * price.quantity;
      return s;
    });
    return s;
  };

  const handleTotal = () => {
    return handlePriceProduct() + 10000;
  };

  //   function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //     event.preventDefault();
  //     console.info("You clicked a breadcrumb.");
  //   }
  const handleCheckout = () => {
    navigate("./checkout");
  };

  return (
    <Box>
      <StyleBreadcrumbs className="f-sz-12" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="./">
          Home
        </Link>
        <Typography className="f-sz-12" color="text.primary">
          Card
        </Typography>
      </StyleBreadcrumbs>
      <StyleTitle>Cart</StyleTitle>
      <Grid container spacing={4}>
        <Grid item xs={8.5}>
          {products.map((product, index) => (
            <Box key={index}>
              <StyleHr />
              <Box sx={{ padding: "30px 0" }}>
                <StyleItemProduct container spacing={5}>
                  <Grid item xs={2}>
                    <StyleImgProduct src={product.image} />
                  </Grid>
                  <StyleBoxContentProduct item xs={6}>
                    <StyleNameProduct>{product.name}</StyleNameProduct>
                    <StyleParaProduct>
                      <StyleBoxParaProduct>
                        <StyleTextParaProduct>Màu sắc:</StyleTextParaProduct>
                        <StyleContebtParaProduct>
                          {product.color}
                        </StyleContebtParaProduct>
                      </StyleBoxParaProduct>
                      <StyleBoxParaProduct>
                        <StyleTextParaProduct>Kích cỡ:</StyleTextParaProduct>
                        <StyleContebtParaProduct>
                          {product.size}
                        </StyleContebtParaProduct>
                      </StyleBoxParaProduct>
                      <StyleBoxParaProduct>
                        <StyleTextParaProduct>Số lượng:</StyleTextParaProduct>
                        <StyleContebtParaProduct>
                          {product.quantity}
                        </StyleContebtParaProduct>
                      </StyleBoxParaProduct>
                    </StyleParaProduct>
                  </StyleBoxContentProduct>
                  <StyleSettingProduct item xs={3}>
                    <StylePriceProduct>{product.price} VNĐ</StylePriceProduct>
                    <StyleAddMinuProduct>
                      <Minu />
                      <p>{product.quantity}</p>
                      <Add />
                    </StyleAddMinuProduct>
                  </StyleSettingProduct>
                  <Grid item xs={1}>
                    <Delete />
                  </Grid>
                </StyleItemProduct>
              </Box>
            </Box>
          ))}
          <StyleHr />
        </Grid>
        <StyleGridPrice item xs={3.5}>
          <StyleBoxTopPrice>
            <StylePTitlePrice>Mã khuyến mại</StylePTitlePrice>
            <StyleFormCodePrice method="post">
              <StyleInputCodePrice
                type="text"
                placeholder="Nhập mã khuyến mại"
              />
              <StyleIconNextPrice />
            </StyleFormCodePrice>
          </StyleBoxTopPrice>
          <StyleBoxBottomPrice>
            <StylePTitlePrice>Giá đặt hàng</StylePTitlePrice>
            <StyleContactPrice>
              <StyleBoxSpaceBetween>
                <StyleTextPrice>Giá trị hàng hóa</StyleTextPrice>
                <StyleTextBoldPrice>
                  {handlePriceProduct()} VNĐ
                </StyleTextBoldPrice>
              </StyleBoxSpaceBetween>
              <StyleBoxSpaceBetween>
                <StyleTextPrice>Vận chuyển</StyleTextPrice>
                <StyleTextBoldPrice>10000 VNĐ</StyleTextBoldPrice>
              </StyleBoxSpaceBetween>
              <StyleBoxSpaceBetween>
                <StyleTextPrice>Số tiền chiết khấu</StyleTextPrice>
                <StyleTextBoldPrice>0 VNĐ</StyleTextBoldPrice>
              </StyleBoxSpaceBetween>
            </StyleContactPrice>
            <StyleHrPrice />
            <StyleBoxSpaceBetween>
              <StyleTextBoldPrice>tổng cộng</StyleTextBoldPrice>
              <StyleTextBoldPrice>{handleTotal()} VNĐ</StyleTextBoldPrice>
            </StyleBoxSpaceBetween>
            <StyleButtonPrice onClick={handleCheckout}>
              Đi đến thanh toán
            </StyleButtonPrice>
          </StyleBoxBottomPrice>
        </StyleGridPrice>
      </Grid>
    </Box>
  );
}

export function Transport() {
  return (
    <Box>
      <StyleTitle>Vận chuyển</StyleTitle>
      <StyleFormTransport method="post">
        <StyleBoxChosse>
          <StyleTrueChosseTransport>
            <img src={TransportIcon} alt="" />
            <StylePRegular16>Chuyển phát nhanh</StylePRegular16>
          </StyleTrueChosseTransport>
          <StyleChosseTransport>
            <img src={EmailIcon} alt="" />
            <StylePRegular16>Thư từ</StylePRegular16>
          </StyleChosseTransport>
        </StyleBoxChosse>
        <StylePRegular16>
          Hãy thử trước khi mua. Thời gian giao hàng 2-7 ngày
        </StylePRegular16>
        <StylePBold16>Đơn hàng nên được giao ở đâu?</StylePBold16>
        <StylePRegular16>
          Nhập địa chỉ trên bản đồ hoặc sử dụng tìm kiếm
        </StylePRegular16>
        <StyleBoxLocation>
          <Location />
          <StylePLocation href="">Xác định vị trí</StylePLocation>
        </StyleBoxLocation>
        <StyleBoxInpTransport>
          <StyleInputTransport type="text" placeholder="Địa phương" />
          <StyleInputTransport type="text" placeholder="Đường phố" />
          <StyleBoxSpaceBetween>
            <StyleInpHalfTransport type="text" placeholder="Căn nhà" />
            <StyleInpHalfTransport type="text" placeholder="Căn hộ" />
          </StyleBoxSpaceBetween>
        </StyleBoxInpTransport>
      </StyleFormTransport>
    </Box>
  );
}

export default function Cart() {
  return (
    <Box className="card">
      <Header />
      <StyleCard>
        <ProductInCart />
        <Transport />
      </StyleCard>
      <Footer />
    </Box>
  );
}

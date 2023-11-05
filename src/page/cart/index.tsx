import { Box, Grid, LinearProgress, Typography } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import { deleteUpdatePurchase, updatePurchase } from "../../Api/purchase";
import { SnackbarActions } from "../../redux/snackbar";

export function ProductInCart({ products }: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user.user);
  const handlePriceProduct = () => {
    let s = 0;
    products.map((price: any) => {
      s = s + price.price * price.quantity;
      return s;
    });
    return s;
  };

  const handleTotal = () => {
    return handlePriceProduct() + 10000;
  };

  const handleChangeQuantity = async (id: string, count: number) => {
    const updatedCart = products.map((item: any) => {
      if (item.productId === id) {
        return {
          ...item,
          productId: item.productId,
          quantity: count,
        };
      }
      return item;
    });
    await updatePurchase(user._id, {
      userId: user._id,
      cart: updatedCart,
    });
  };

  const handleCheckout = () => {
    navigate("./checkout");
  };

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteUpdatePurchase({
        id: id,
        userId: user._id
      });

      if (result) {
        dispatch(
          SnackbarActions.OnSnackbar({
            mode: true,
            content: "Delete product success",
            type: "success",
          })
        );
      }
    } catch (error) {
      console.error();
      dispatch(
        SnackbarActions.OnSnackbar({
          mode: true,
          content: `Error deleting product:, ${error}`,
          type: "error",
        })
      );
    }
  }


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
          {products &&
            products.map((product: any, index: number) => (
              <Box key={index}>
                <StyleHr />
                <Box sx={{ padding: "30px 0" }}>
                  <StyleItemProduct container spacing={5}>
                    <Grid item xs={2}>
                      <StyleImgProduct src={product.img[0]} />
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
                        <Minu
                          onClick={() =>
                            handleChangeQuantity(
                              product.productId,
                              product.quantity - 1
                            )
                          }
                        />
                        <p>{product.quantity}</p>
                        <Add
                          onClick={() =>
                            handleChangeQuantity(
                              product.productId,
                              product.quantity + 1
                            )
                          }
                        />
                      </StyleAddMinuProduct>
                    </StyleSettingProduct>
                    <Grid item xs={1}>
                      <Delete onClick={() => handleDelete(product.productId)} />
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
  // const user = useSelector((state: any) => state.user.user.user);
  const products = useSelector((state: any) => state.purchase.purchase.cart);

  return (
    <Box className="card">
      <Header />
      {products && products.length !== 0 ? (
        <StyleCard>
          <ProductInCart products={Array.isArray(products) ? products : []} />
          <Transport />
        </StyleCard>
      ) : (
        <LinearProgress />
      )}
      <Footer />
    </Box>
  );
}

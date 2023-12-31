import { Box, Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import HeartOff from "../../../images/product/icon-love.svg";
import Shoping from "../../../images/product/cart-4.svg";
import Transport from "../../../images/product/iconoir_delivery.svg";
import Car from "../../../images/product/iconoir_delivery-truck.svg";
import Share from "../../../images/product/ant-design_share-alt-outlined.svg";

import {
  ItemTransportGrid,
  ProductGrid,
  SizeProductGrid,
  TransportGrid,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addUpdatePurchase } from "../../../Api/purchase";
import { SnackbarActions } from "../../../redux/snackbar";

export default function Card({ product }: any) {
  const dispatch = useDispatch();
  const [sizeProduct, SetSizeProduct] = useState<string>();
  const [colorProduct, SetColorProduct] = useState<string>();

  const [total, SetTotal] = useState<number>(1);

  const size: Set<any> = useMemo(() => new Set(), []);
  const color: Set<any> = useMemo(() => new Set(), []);
  product?.parameter.map((item: any) => {
    color.add(item.color);
    return item.size.map((ele: any) => {
      return size.add(ele);
    });
  });
  useEffect(() => {
    SetSizeProduct(size.values().next().value);
    SetColorProduct(color.values().next().value);
  }, [size, color]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const user = useSelector((state: any) => state.user.user.user);
  const handleOrder = async () => {
    if (!(colorProduct && sizeProduct && total > 0)) {
      dispatch(
        SnackbarActions.OnSnackbar({
          mode: true,
          content: "Must fill in all information",
          type: "error",
        })
      );
      return;
    }
    const data = {
      userId: user?._id,
      cart: {
        productId: product?._id,
        name: product.name,
        img: product.img,
        price: product.price,
        discount: product.discount,
        color: colorProduct,
        size: sizeProduct,
        quantity: total,
      },
    };

    const update = await addUpdatePurchase(data);
    if (update) {
      dispatch(
        SnackbarActions.OnSnackbar({
          mode: true,
          content: "Add product success",
          type: "success",
        })
      );
    }
  };
  const colorSize =
    colorProduct &&
    product.parameter.filter((product: any) => product.color == colorProduct)[0]
      .size;
  return (
    <>
      <ProductGrid container columns={13} spacing={2}>
        <Grid item xs={6}>
          <Grid>
            <Slider {...settings} className="slide">
              {product?.img.map((item: any) => (
                <img src={item} width="100%" height="600px" alt="" />
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Grid item xs={7} display="flex">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Typography>2 Dánh Giá</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={8}>
                  <Typography>{product?.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Grid sx={{ padding: "0 5px" }}>
                      <img src={HeartOff} alt="error" />
                    </Grid>
                    <Grid sx={{ padding: "0 5px" }}>
                      <img src={Share} alt="error" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid>
                <Typography>
                  {(product?.price * (100 - product?.discount)) / 100} VND
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid>
                <Typography>
                  Màu:{" "}
                  {Array.from(color).map((value) => (
                    <Box
                      sx={{ color: value === colorProduct ? "red" : "while" }}
                      onClick={() => {
                        SetColorProduct(value);
                      }}
                    >
                      {value}
                    </Box>
                  ))}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid>
                Size:
                <Grid sx={{ display: "flex", marginTop: "10px" }}>
                  {Array.from(size).map((item: any) => (
                    <SizeProductGrid
                      sx={{
                        borderColor:
                          sizeProduct === item ? "#000000" : "#DBE5F1",
                        display:
                          colorSize && colorSize.includes(item)
                            ? "block"
                            : "none",
                      }}
                      onClick={() => {
                        SetSizeProduct(item);
                      }}
                    >
                      {item}
                    </SizeProductGrid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid>
                Phương thức giao hàng:
                <Grid
                  sx={{
                    background: "#D9D9D9",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <TransportGrid>
                    <img src={Car} alt="" />
                    <ItemTransportGrid>
                      Chuyển phát nhanh đến tận nhà - miễn phí cho đơn hàng từ
                      ₫2.000.000 <br />
                      Thử trước khi mua trong vòng 15 phút
                    </ItemTransportGrid>
                  </TransportGrid>
                  <TransportGrid>
                    <img src={Transport} alt="" />
                    <ItemTransportGrid>
                      Vận chuyển hoả tốc <br />
                      Không được thử
                    </ItemTransportGrid>
                  </TransportGrid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} alignSelf="end">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Grid
                    sx={{
                      border: "1px solid #1E1E1E",
                      display: "flex",
                      justifyContent: "space-evenly",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <Grid
                      onClick={() => {
                        total > 1 && SetTotal(total - 1);
                      }}
                    >
                      -
                    </Grid>
                    <Grid>{total}</Grid>
                    <Grid
                      onClick={() => {
                        SetTotal(total + 1);
                      }}
                    >
                      +
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7}>
                  <Grid>
                    <TransportGrid
                      sx={{
                        justifyContent: "center",
                        background: "#000000",
                        borderRadius: "20px",
                        color: "#ffffff",
                        padding: "10px",
                      }}
                      onClick={() => {
                        handleOrder();
                      }}
                    >
                      <img src={Shoping} alt="" />
                      <ItemTransportGrid>Add Order</ItemTransportGrid>
                    </TransportGrid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ProductGrid>
    </>
  );
}

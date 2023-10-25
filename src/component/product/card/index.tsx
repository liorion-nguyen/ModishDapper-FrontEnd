import { Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import HeartOff from "../../../images/product/icon-love.svg";
import Shoping from "../../../images/product/cart-4.svg";
import Transport from "../../../images/product/iconoir_delivery.svg";
import Car from "../../../images/product/iconoir_delivery-truck.svg";
import Share from "../../../images/product/ant-design_share-alt-outlined.svg";

import { ItemTransportGrid, SizeProductGrid, TransportGrid } from "./style";

export default function Card({ product }: any) {
  const [sizeProduct, SetSizeProduct] = useState<string>();
  const [total, SetTotal] = useState<number>(1);

  const size: Set<any> = useMemo(() => new Set(), []);
  const color: string[] = [];
  product?.parameter.map((item: any) => {
    color.push(item.color);
    return item.size.map((ele: any) => {
      return size.add(ele);
    });
  });
  useEffect(() => {
    SetSizeProduct(size.values().next().value);
  }, [size]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Grid container columns={13} spacing={2}>
        <Grid item xs={6}>
          <Grid>
            <Slider {...settings} className="slide">
              {product?.img.map((item: any) => (
                <img src={item} width="100%" alt="" />
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Grid item xs={7} display="flex">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Typography>hello</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={8}>
                  <Typography>hello</Typography>
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
                  {(product?.money * product?.discount) / 100}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid>
                <Typography>
                  Màu:{" "}
                  {color.map((value) => (
                    <>{value} </>
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
                    <ItemTransportGrid>text</ItemTransportGrid>
                  </TransportGrid>
                  <TransportGrid>
                    <img src={Transport} alt="" />
                    <ItemTransportGrid>text</ItemTransportGrid>
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
                    >
                      <img src={Shoping} alt="" />
                      <ItemTransportGrid>text</ItemTransportGrid>
                    </TransportGrid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

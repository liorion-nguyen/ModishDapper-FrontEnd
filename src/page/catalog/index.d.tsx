import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import * as React from "react";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import img from "../../images/catalog/Ellipse 18.png";
import Header from "../../component/header";
import Footer from "../../component/footer";
import {
  CategoryItemTypoGrapphy,
  CategoryTypoGrapphy,
  ContainerGrid,
  ContainerGridRight,
  Href,
  ItemProductGrid,
  ItemProductSpan,
  Title,
} from "./style";
import { getProducts } from "../../Api/catalog";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
export default function Catalog() {
  const [products, SetProducts] = useState<any>();
  const [capacity, SetCapacity] = useState<any>(12);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const Bestller = [
    {
      img: img,
      text: "Polo Nam Thêu",
    },
    {
      img: img,
      text: "Polo Nam Thêu",
    },
    {
      img: img,
      text: "Polo Nam Thêu",
    },
    {
      img: img,
      text: "Polo Nam Thêu",
    },
  ];
  const category = [
    "Áo POLO",
    "Sơ Mi",
    "Quần Short",
    "Quần Jean",
    "Áo Hoodie, Áo Len & Áo Nỉ",
    "Áo Len & Cardigan",
    "Quần Dài / Quần Âu",
    "Áo Khoác",
    "Áo Gile",
    "Áo Thun",
  ];
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    async function fetchMyAPI() {
      const res = await getProducts();
      SetProducts(res.data);
    }
    try {
      fetchMyAPI();
    } catch (e) {
      console.error(e);
    }
  }, []);
  console.log(products);
  return (
    <>
      <Header />
      <ContainerGrid container spacing={2}>
        <Grid item xs={2}>
          <Grid>
            <CategoryTypoGrapphy>DANH MỤC</CategoryTypoGrapphy>
            <Grid>
              {category.map((item: string) => (
                <CategoryItemTypoGrapphy>{item}</CategoryItemTypoGrapphy>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <ContainerGridRight container spacing={2}>
            <Grid item xs={12}>
              <Grid>
                <Title>BESTLLER</Title>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "30px" }}>
              <Grid container spacing={2}>
                {Bestller.map((item) => (
                  <ItemProductGrid item xs={3} textAlign="center">
                    <Grid>
                      <img src={item.img} style={{ width: "100%" }} alt="" />
                      <Typography sx={{ marginTop: "10px" }}>
                        {item.text}
                      </Typography>
                    </Grid>
                  </ItemProductGrid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} marginTop="100px">
              <Grid container columns={10}>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Sắp xếp theo
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Phổ Biến
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Mới Nhất
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Bán chạy
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      disableElevation
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{ backgroundColor: "white", color: "black" }}
                    >
                      Giá
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        <EditIcon />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <FileCopyIcon />
                        Duplicate
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <ArchiveIcon />
                        Archive
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon />
                        More
                      </MenuItem>
                    </StyledMenu>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {Array.isArray(products) &&
                  products.map((item: any, index: any) => {
                    const size = new Set();
                    if (index < capacity) {
                      return (
                        <Grid item xs={4}>
                          <Href to={`/product/${item._id}`}>
                            <Grid>
                              <Grid
                                sx={{
                                  borderRadius: "20px",
                                  overflow: "hidden",
                                }}
                              >
                                <img
                                  src={item.img[0]}
                                  alt="error"
                                  width="100%"
                                  style={{ height: "350px" }}
                                />
                              </Grid>
                              <Grid
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "5px 0",
                                }}
                              >
                                <Typography>{item.name}</Typography>
                                <Grid>
                                  {item.parameter.map(
                                    (ele: any, index: any) => {
                                      ele.size.map((value: any) => {
                                        return size.add(value);
                                      });
                                      if (index === item.parameter.length - 1) {
                                        return Array.from(size).map(
                                          (value: any) => {
                                            return (
                                              <ItemProductSpan>
                                                {value}
                                              </ItemProductSpan>
                                            );
                                          }
                                        );
                                      }
                                      return <></>;
                                    }
                                  )}
                                </Grid>
                              </Grid>
                              <Grid
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "5px 0",
                                }}
                              >
                                <Grid display="flex">
                                  <Grid
                                    sx={{ color: "black", fontWeight: "bold" }}
                                  >
                                    ₫{item.price}
                                  </Grid>
                                  {item.discount > 0 && (
                                    <Grid
                                      sx={{
                                        color: "red",
                                        fontWeight: "bold",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      {item.discount}% GIẢM
                                    </Grid>
                                  )}
                                </Grid>
                                <Grid>
                                  <ItemProductSpan>
                                    {item.color}
                                  </ItemProductSpan>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Href>
                        </Grid>
                      );
                    }
                    return <></>;
                  })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {products && products.length > Catalog && (
                <Grid
                  sx={{
                    textAlign: "center",
                    background: "black",
                    color: "white",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  onClick={() => {
                    SetCapacity(capacity + 12);
                  }}
                >
                  12 Sản phẩm tiếp theo
                </Grid>
              )}
            </Grid>
          </ContainerGridRight>
        </Grid>
      </ContainerGrid>
      <Footer />
    </>
  );
}

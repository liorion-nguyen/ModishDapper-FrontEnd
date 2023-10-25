import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import Footer from "../../component/footer";
import Header from "../../component/header";
import {
  StyleANavFirst,
  StyleANavLast,
  StyleRefNav,
  StyleImgNav,
  StyleMain,
  StyleNavBar,
  StyleNavLeft,
  StylePNav,
  StylePDeal,
  StyleTitle,
  StyleADeal,
  StyleImgDeal,
  StyleItemDeal,
  StyleContentDeal,
  StyleBoxDeal,
  StyleBoxImgTop,
  StyleImgTop,
  StylePNameTop,
  StylePPriceTop,
  StyleBoxTop,
  StyleBoxContentTop,
  StyleBoxPriceTop,
  StyleEleInImgTop,
  StyleNumberDiscountTop,
  StyleIconLoveTop,
  StyleIconEyeTop,
  StyleBoxIconTop,
  StyleButtonMoreTop,
  StyleBoxMoreTop,
  StyleImgCollection,
  StyleAImgCollection,
  StyleNameCollection,
  StyleImgNew,
  StyleNameNew,
  StylePriceNew,
  StyleDiscountNew,
  StyleBoxPriceNew,
  StyleGridNew,
  StyleImgInBox,
  StyleASlide,
} from "./style-mui";

import All from "../../images/home/deal/seen-all-sale.png";
import Eye from "../../images/home/topSearch/icon-eye.svg";
import Love from "../../images/home/topSearch/icon-love.svg";
import LoveOn from "../../images/home/topSearch/icon-love-on.svg";
import { useEffect, useState } from "react";
import { getProducts } from "../../Api/catalog";

export function Navbar() {
  return (
    <StyleNavBar>
      <StyleImgNav src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj29vqf6o83w95" />
      <StyleNavLeft>
        <StylePNav>Chào mừng bạn đến với trang mua bán trực tuyến</StylePNav>
        <StyleRefNav>
          <StyleANavFirst>Bạn đã có tài khoản</StyleANavFirst>
          <StyleANavLast>Đăng kí ngay</StyleANavLast>
        </StyleRefNav>
      </StyleNavLeft>
    </StyleNavBar>
  );
}

export function Deal() {
  const deals = [
    {
      name: "Happy Heart Polo",
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-k30td5dsienvf7",
      href: "",
    },
    {
      name: "Jean Basic",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmshonpu9ecfbf",
      href: "",
    },
    {
      name: "Sweat W Basic",
      img: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-v32kb9l4jlovf5",
      href: "",
    },
    {
      name: "Sơ mi thêu LOGO",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmex02uyfun35a",
      href: "",
    },
    {
      name: "Jacket",
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-75lyidugp7kv06",
      href: "",
    },
    {
      name: "Xem tất cả",
      img: All,
      href: "",
    },
  ];
  return (
    <StyleBoxDeal>
      <StyleTitle>Deal hot</StyleTitle>
      <StyleContentDeal>
        {deals.map((deal, index) => (
          <StyleItemDeal>
            <StyleADeal href={deal.href}>
              <StyleImgDeal src={deal.img} />
            </StyleADeal>
            <StylePDeal>{deal.name}</StylePDeal>
          </StyleItemDeal>
        ))}
      </StyleContentDeal>
    </StyleBoxDeal>
  );
}

export function TopSearches() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const topSearches = [
    {
      name: "HAPPY HEART POLO",
      price: 549000,
      discount: 25,
      img: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfkyw6dmlpyw9f",
      love: true,
      href: "",
    },
    {
      name: "POLO KẺ",
      price: 615000,
      discount: 0,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ud3lh6cbc2kv82",
      love: true,
      href: "",
    },
    {
      name: "JEAN BASIC",
      price: 699000,
      discount: 10,
      img: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfkyw6dmlpyw9f",
      love: false,
      href: "",
    },
    {
      name: "SƠ MI DENIM TAY DÀI",
      price: 1200000,
      discount: 0,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ud3lh6cbc2kv82",
      love: false,
      href: "",
    },
    {
      name: "HAPPY HEART POLO",
      price: 200000,
      discount: 50,
      img: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfkyw6dmlpyw9f",
      love: false,
      href: "",
    },
    {
      name: "HAPPY HEART POLO",
      price: 179000,
      discount: 0,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ud3lh6cbc2kv82",
      love: true,
      href: "",
    },
    {
      name: "HAPPY HEART POLO",
      price: 289000,
      discount: 0,
      img: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfkyw6dmlpyw9f",
      love: false,
      href: "",
    },
    {
      name: "HAPPY HEART POLO",
      price: 299000,
      discount: 15,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ud3lh6cbc2kv82",
      love: true,
      href: "",
    },
  ];

  return (
    <StyleBoxDeal className="deal">
      <StyleTitle>Tìm kiếm hàng đầu</StyleTitle>
      <div>
        <Slider {...settings}>
          {topSearches.map((item, index) => (
            <StyleBoxTop href={item.href} key={index}>
              <StyleBoxImgTop>
                <StyleImgTop src={item.img} />
                <StyleEleInImgTop>
                  <StyleNumberDiscountTop
                    className={item.discount === 0 ? "hidden" : ""}
                  >
                    -{item.discount}%
                  </StyleNumberDiscountTop>
                  <StyleBoxIconTop>
                    <StyleIconLoveTop src={item.love ? LoveOn : Love} />
                    <StyleIconEyeTop src={Eye} />
                  </StyleBoxIconTop>
                </StyleEleInImgTop>
              </StyleBoxImgTop>
              <StyleBoxContentTop>
                <StylePNameTop>{item.name}</StylePNameTop>
                <StyleBoxPriceTop>
                  <StylePPriceTop
                    className={item.discount > 0 ? "txt-line" : ""}
                  >
                    {item.price}VNĐ
                  </StylePPriceTop>
                  {item.discount > 0 && (
                    <StylePPriceTop>
                      {parseFloat(
                        (
                          item.price -
                          item.discount * item.price * 0.01
                        ).toFixed(2)
                      )}
                      VNĐ
                    </StylePPriceTop>
                  )}
                </StyleBoxPriceTop>
              </StyleBoxContentTop>
            </StyleBoxTop>
          ))}
        </Slider>
      </div>
      <StyleBoxMoreTop>
        <StyleButtonMoreTop>Xem thêm </StyleButtonMoreTop>
      </StyleBoxMoreTop>
    </StyleBoxDeal>
  );
}

export function NewCollection() {
  const collections = [
    {
      name: "Trẻ trung - Lịch sự",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llmba6yipby41e",
      href: "",
    },
    {
      name: "Bestselle",
      img: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lev2e3gtgm6v09",
      href: "",
    },
    {
      name: "Năng Động - Phong cách",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnmn8dis918ed",
      href: "",
    },
  ];
  return (
    <StyleBoxDeal>
      <StyleTitle>Bộ sưu tập mới</StyleTitle>
      <StyleContentDeal>
        {collections.map((collection, index) => (
          <StyleAImgCollection href={collection.href} key={index}>
            <StyleImgCollection src={collection.img} />
            <StyleNameCollection>{collection.name}</StyleNameCollection>
          </StyleAImgCollection>
        ))}
      </StyleContentDeal>
    </StyleBoxDeal>
  );
}

export function New({ products }: any) {
  return (
    <StyleBoxDeal>
      <StyleTitle>NEW</StyleTitle>
      <Grid container spacing={2} rowSpacing={8}>
        {products &&
          products.map(
            (newItem: any, index: any) =>
              index < 12 && (
                <StyleGridNew item xs={3} md={3} key={index}>
                  <StyleImgNew src={newItem?.img[0]} />
                  <StyleNameNew>{newItem?.name}</StyleNameNew>
                  <StyleBoxPriceNew>
                    <StylePriceNew>${newItem?.price}</StylePriceNew>
                    {newItem?.discount > 0 && (
                      <StyleDiscountNew>
                        {newItem?.discount}% GIẢM
                      </StyleDiscountNew>
                    )}
                  </StyleBoxPriceNew>
                </StyleGridNew>
              )
          )}
      </Grid>
      <StyleBoxMoreTop>
        <StyleButtonMoreTop>Xem thêm </StyleButtonMoreTop>
      </StyleBoxMoreTop>
    </StyleBoxDeal>
  );
}

export function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slide = [
    {
      img: "https://down-vn.img.susercontent.com/file/55be7dd7d37a561cd7a60c4030ea3310",
      href: "",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/691d67bd4f6d75b375b5172626a579a0",
      href: "",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/62d836613b5c75cd0f45b7aa9ef9d99f",
      href: "",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/3cf157b8e3fdfa81be5905ea3ed96fc2",
      href: "",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/55104bb1aa88f5c33ecc7befe38478b4",
      href: "",
    },
  ];
  return (
    <Slider {...settings} className="slide">
      {slide.map((item, index) => (
        <StyleASlide href={item.href} key={index}>
          <StyleImgInBox src={item.img} />
        </StyleASlide>
      ))}
    </Slider>
  );
}

export function ModishDapper() {
  const pictures = [
    "https://down-vn.img.susercontent.com/file/29cc1084e769b71fa7e0ffb76923c712",
    "https://down-vn.img.susercontent.com/file/e8d892dd18605059d8779b3429089535",
    "https://down-vn.img.susercontent.com/file/fb806c82c1b0a06b9ce05fe238976a9f",
    "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lk9bwlyoru7q8a",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgwkierhueb702",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgwkieripanm41",
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-dzu5e2xe8invd4",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh4nfbozlblfdc",
  ];
  return (
    <StyleBoxDeal>
      <StyleTitle>MODISH DAPPER</StyleTitle>
      <Grid container spacing={3} rowSpacing={5}>
        {pictures.map((picture, index) => (
          <StyleGridNew item xs={3} md={3} key={index}>
            <StyleImgNew src={picture} />
          </StyleGridNew>
        ))}
      </Grid>
    </StyleBoxDeal>
  );
}

export default function Home() {
  const [products, SetProducts] = useState<any>();

  useEffect(() => {
    async function fetchMyAPI() {
      const res = await getProducts();
      SetProducts(res);
    }
    try {
      fetchMyAPI();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <Box>
      <Header />
      <StyleMain>
        <Navbar />
        <Deal />
        <TopSearches />
        <NewCollection />
        <New products={products} />
        <Slide />
        <ModishDapper />
      </StyleMain>
      <Footer />
    </Box>
  );
}

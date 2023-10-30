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
import { getProducts, getProductsDeal, getProductsNews, getProductsTopSearch, updateProduct } from "../../Api/product";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { decodedAT } from "../../Api/user";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../../redux/user";

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

export function Deal({ deals }: any) {
  return (
    <StyleBoxDeal>
      <StyleTitle>Deal hot</StyleTitle>
      <StyleContentDeal>
        {deals.map((deal: any, index: number) => (
          <StyleItemDeal key={index}>
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

export function TopSearches({ topSearchs }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: topSearchs.length < 4 ? topSearchs.length : 4,
    slidesToScroll: 1,
  };

  const user_id = useSelector((state: any) => state.user.user.user?._id);
  const navigate = useNavigate();
  const handleHref = (ref: string) => {
    navigate(ref)
  }
  const handleFavourite = async (id: string, search: any) => {
    let updatedFavourite;
    if (search.love.includes(id)) {
      updatedFavourite = search.love.filter((productId: any) => productId !== id);
    } else {
      updatedFavourite = [...search.love, id];
    }
    await updateProduct(search.id, { favourite: updatedFavourite });
  }

  return (
    <StyleBoxDeal className="deal">
      <StyleTitle>Tìm kiếm hàng đầu</StyleTitle>
      <div>
        <Slider {...settings}>
          {topSearchs.map((item: any, index: number) => (
            <StyleBoxTop key={index}>
              <StyleBoxImgTop>
                <StyleImgTop src={item.img[0]} onClick={() => handleHref(item.href)}/>
                <StyleEleInImgTop>
                  <StyleNumberDiscountTop
                    className={item.discount === 0 ? "hidden" : ""}
                  >
                    -{item.discount}%
                  </StyleNumberDiscountTop>
                  <StyleBoxIconTop>
                    <StyleIconLoveTop src={item.love.includes(user_id) ? LoveOn : Love} onClick={() => handleFavourite(user_id, item)} />
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

export function New({ news }: any) {
  const navigate = useNavigate();
  const handleHref = (ref: string) => {
    navigate(ref)
  }
  return (
    <StyleBoxDeal>
      <StyleTitle>NEW</StyleTitle>
      <Grid container spacing={2} rowSpacing={8}>
        {news.map(
            (newItem: any, index: any) =>
              index < 12 && (
                <StyleGridNew item xs={3} md={3} key={index}>
                  <StyleImgNew src={newItem?.img[0]} onClick={() => handleHref(newItem.href)}/>
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
  const [news, SetNews] = useState<any>();
  const [topSearchs, SetTopSearchs] = useState<any>();
  const [deals, SetDeals] = useState<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user.user);

  useEffect(() => {
    if (!Cookies.get('modish') || Cookies.get('modish') === undefined) {
      navigate('/Login');
    }
    else {
      const decoded = async () => {
        const user = await decodedAT(Cookies.get('modish') || "");
        if (user.error === "Invalid Access Token") {
          Cookies.remove('modish');
          navigate('/Login');
        }
        else {
          dispatch(UserActions.setUser(user))
        }
      }
      decoded();
    }
  }, [Cookies.get('modish')]);

  useEffect(() => {
    async function fetchMyAPI() {
      const user = await decodedAT(Cookies.get('modish') || "");
      const resDeal = await getProductsDeal(5);
      SetDeals(resDeal);

      const resTopSearchs = await getProductsTopSearch(8);
      SetTopSearchs(resTopSearchs);

      const resNews = await getProductsNews(8);
      SetNews(resNews);
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
        <Deal deals={Array.isArray(deals) ? deals : []} />
        <TopSearches topSearchs={Array.isArray(topSearchs) ? topSearchs : []} />
        <NewCollection />
        <New news={Array.isArray(news) ? news : []} />
        <Slide />
        <ModishDapper />
      </StyleMain>
      <Footer />
    </Box>
  );
}

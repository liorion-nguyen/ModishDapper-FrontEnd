import { Box } from "@mui/material";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../../component/footer";
import Header from "../../component/header";
import { StyleANavFirst, StyleANavLast, StyleRefNav, StyleImgNav, StyleMain, StyleNavBar, StyleNavLeft, StylePNav, StylePDeal, StyleTitle, StyleADeal, StyleImgDeal, StyleItemDeal, StyleContentDeal, StyleBoxDeal } from "./style-mui";

import All from '../../image/home/deal/seen-all-sale.png';

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
            name: 'Happy Heart Polo',
            img: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-k30td5dsienvf7',
            href: '',
        },
        {
            name: 'Jean Basic',
            img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmshonpu9ecfbf',
            href: '',
        },
        {
            name: 'Sweat W Basic',
            img: 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-v32kb9l4jlovf5',
            href: '',
        },
        {
            name: 'Sơ mi thêu LOGO',
            img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmex02uyfun35a',
            href: '',
        },
        {
            name: 'Jacket',
            img: 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-75lyidugp7kv06',
            href: '',
        },
        {
            name: 'Xem tất cả',
            img: All,
            href: '',
        },
    ]
    return (
        <StyleBoxDeal>
            <StyleTitle>Deal hot</StyleTitle>
            <StyleContentDeal>
                {
                    deals.map((deal, index) => (
                        <StyleItemDeal>
                            <StyleADeal href={deal.href}><StyleImgDeal src={deal.img} /></StyleADeal>
                            <StylePDeal>{deal.name}</StylePDeal>
                        </StyleItemDeal>
                    ))
                }
            </StyleContentDeal>
        </StyleBoxDeal>
    );
}

export function TopSearches() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <StyleBoxDeal>
            <StyleTitle>Tìm kiếm hàng đầu</StyleTitle>
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </StyleBoxDeal>
    );
}

export default function Home() {
    return (
        <Box>
            <Header />
            <StyleMain>
                <Navbar />
                <Deal />
                <TopSearches />
            </StyleMain>
            <Footer />
        </Box>
    );
}
import { Box } from "@mui/material";

import User from '../../images/home/header/icon-user.svg';
import Heart from '../../images/home/header/icon-heart.svg';
import Cart from '../../images/home/header/icon-cart.svg';
import Logo from '../../images/home/header/logo.svg';
import { StyleBoxLogo, StyleCart, StyleHeader, StyleImgLogo, StyleListIcon, StyleListText, StyleText } from "./style-mui";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const items = [
        {
            name: 'Trang chủ',
            href: '../',
        },
        {
            name: 'Flash Sale',
            href: '',
        },
        {
            name: 'Sản phẩm',
            href: '',
        },
        {
            name: 'Bộ sưu tập',
            href: '',
        },
    ]

    const handleCart = () => {
        navigate('../cart');
    }
    return (
        <StyleHeader>
            <StyleBoxLogo>
                <StyleImgLogo src={Logo} />
            </StyleBoxLogo>

            <StyleListText>
                {
                    items.map((item) => (
                        <StyleText href={item.href}>{item.name}</StyleText>
                    ))
                }
            </StyleListText>

            <StyleListIcon>
                <Box>
                    <img src={User} />
                </Box>
                <Box>
                    <img src={Heart} />
                </Box>
                <Box sx={{position: 'relative'}}>
                    <StyleCart data-count="3" onClick={handleCart}>
                        <img src={Cart} />
                    </StyleCart>
                </Box>
            </StyleListIcon>
        </StyleHeader>
    );
}
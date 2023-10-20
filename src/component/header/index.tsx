import { Box } from "@mui/material";

import User from '../../image/home/header/icon-user.svg';
import Heart from '../../image/home/header/icon-heart.svg';
import Cart from '../../image/home/header/icon-cart.svg';
import { StyleCart, StyleHeader, StyleListIcon, StyleListText, StyleText } from "./style-mui";

export default function Header() {
    const items = [
        {
            name: 'Trang chủ',
            href: '',
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
    return (
        <StyleHeader>
            <Box>
                <img src="https://aristino.com/Data/upload/images/Logo/logo%20Aristino%20Final%202023%20(2).png" />
            </Box>

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
                    <StyleCart data-count="3">
                        <img  src={Cart} />
                    </StyleCart>
                </Box>
            </StyleListIcon>
        </StyleHeader>
    );
}
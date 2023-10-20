import { Box } from "@mui/material";

import Mail from '../../images/home/footer/icon-mail.svg';
import Phone from '../../images/home/footer/icon-phone.svg';
import Return from '../../images/home/footer/icon-return.svg';
import Truck from '../../images/home/footer/icon-truck.svg';
import Facebook from '../../images/home/footer/icon-facebook.svg';
import Instagram from '../../images/home/footer/icon-instagram.svg';
import Telegram from '../../images/home/footer/icon-telegram.svg';
import Tiktok from '../../images/home/footer/icon-tiktok.svg';
import Twitter from '../../images/home/footer/icon-twitter.svg';
import Youtube from '../../images/home/footer/icon-youtube.svg';
import Payment from '../../images/home/footer/icon-payment.svg';
import { StyleHref, StyleContact, StyleFooter, StyleIconContact1, StyleText, StyleHref2, StyleTitle, StyleExplain, StyleBox25 } from "./style-mui";

export default function Footer() {
    const contactLine1 = [
        {
            icon: Truck,
            content: 'Vận chuyển',
            href: '',
        },
        {
            icon: Return,
            content: 'Trả lại và trao đổi',
            href: '',
        },
        {
            icon: Phone,
            content: '+84 708-200-334 ',
            href: 'tel:0708200334',
        },
        {
            icon: Mail,
            content: 'liorion.nguyen@gmail.com',
            href: 'mailto:liorion.nguyen@gmail.com',
        }
    ];

    const contactLine2 = [
        {
            title: 'Dành cho bạn',
            content: [
                {
                    explain: 'Sự chi trả',
                    href: '',
                },
                {
                    explain: 'Chính sách dữ liệu cá nhân',
                    href: '',
                },
                {
                    explain: 'Cổ phần',
                    href: '',
                },
                {
                    explain: 'Phiếu quà tặng',
                    href: '',
                }
            ]
        },
        {
            title: '',
            content: [
                {
                    explain: 'Chương trình liên kết',
                    href: '',
                },
                {
                    explain: 'Quy định sử dụng mã khuyến mãi',
                    href: '',
                }
            ]
        },
        {
            title: 'Về công ty',
            content: [
                {
                    explain: 'Về chúng tôi',
                    href: '',
                },
                {
                    explain: 'Liên lạc',
                    href: '',
                },
                {
                    explain: 'Tin tức',
                    href: '',
                },
                {
                    explain: 'Vị trí tuyển dụng',
                    href: '',
                }
            ]
        },
    ];

    const social = [
        {
            icon: Facebook,
            href: '',
        },
        {
            icon: Youtube,
            href: '',
        },
        {
            icon: Instagram,
            href: '',
        },
        {
            icon: Twitter,
            href: '',
        },
        {
            icon: Tiktok,
            href: '',
        },
        {
            icon: Telegram,
            href: '',
        }
    ]
    return (
        <StyleFooter>
                <StyleContact>
                    {
                        contactLine1.map((contact) => (
                            <StyleHref href={contact.href}>
                                <StyleIconContact1><img src={contact.icon} /></StyleIconContact1>
                                <StyleText>{contact.content}</StyleText>
                            </StyleHref>
                        ))
                    }
                </StyleContact>

                <StyleContact>
                    {
                        contactLine2.map((contact) => (
                            <StyleBox25>
                                <StyleTitle>{contact.title}</StyleTitle>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                    {
                                        contact.content.map((content) => (
                                            <Box>
                                                <StyleHref2 href={content.href}>{content.explain}</StyleHref2>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </StyleBox25>
                        ))
                    }
                    <StyleBox25>
                        <StyleTitle>Mạng xã hội</StyleTitle>
                        <Box sx={{display: 'flex', gap: '20px'}}>
                            {
                                social.map((icon)=> (
                                    <a href={icon.href}>
                                        <img src={icon.icon} />
                                    </a>
                                ))
                            }
                        </Box>
                    </StyleBox25>
                </StyleContact>

                <StyleContact>
                    <StyleBox25>
                        <StyleExplain>© 20223 – 2023 Modish Dapper. </StyleExplain>
                        <StyleExplain>Đã đăng ký Bản quyền.</StyleExplain>
                    </StyleBox25>
                    <StyleBox25>
                        <StyleExplain>Công ty trách nhiệm hữu hạn "Modish Dapper", địa chỉ pháp lý: Cầu Giấy, Hà Nội, Việt Nam</StyleExplain>
                    </StyleBox25>
                    <StyleBox25>
                        <StyleExplain>Trong sổ đăng ký kinh doanh từ ngày 19 tháng 10 năm 2023, số đăng ký 256476, UNP 14886482</StyleExplain>
                    </StyleBox25>
                    <StyleBox25>
                        <img src={Payment}/>
                    </StyleBox25>
                </StyleContact>
        </StyleFooter>
    );
}
import { Box, Grid, Link, Typography } from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { StyleBoxBottomPrice, StyleBoxChosse, StyleBoxSpaceBetween, StyleBreadcrumbs, StyleButtonPrice, StyleCard, StyleChosseTransport, StyleContactPrice, StyleGridPrice, StyleHr, StyleHrPrice, StyleInputTransport, StylePBold16, StylePRegular16, StylePTitlePrice, StyleTextBoldPrice, StyleTextPrice, StyleTitle, StyleTrueChosseTransport } from "../cart/style-mui";
import { StyleBoxForm, StyleBoxPay, StyleChangeLocationPay } from "./style-mui";

export function Order() {
    return (
        <Box>
            <StyleBreadcrumbs className="f-sz-12" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="./">Home</Link>
                <Link underline="hover" color="inherit" href="../cart">Card</Link>
                <Typography className="f-sz-12" color="text.primary">Checkout</Typography>
            </StyleBreadcrumbs>
            <StyleTitle>Đặt hàng</StyleTitle>
            <Grid container spacing={4}>
                <Grid item xs={8.5}>
                    <StyleBoxForm>
                        <StylePBold16>Thông tin liên lạc</StylePBold16>
                        <Grid container spacing={6} rowSpacing={2}>
                            <Grid item xs={6}>
                                <StyleInputTransport type="text" placeholder="Tên" />
                            </Grid>
                            <Grid item xs={6}>
                                <StyleInputTransport type="text" placeholder="Tên gia đình" />
                            </Grid>
                            <Grid item xs={6}>
                                <StyleInputTransport type="text" placeholder="E-mail" />
                            </Grid>
                            <Grid item xs={6}>
                                <StyleInputTransport type="text" placeholder="Điện thoại" />
                            </Grid>
                        </Grid>
                    </StyleBoxForm>
                    <br /><br />
                    <StyleHr />
                    <br /><br />
                    <StyleBoxPay>
                        <StyleBoxSpaceBetween>
                            <StylePBold16>Chi tiết địa chỉ giao hàng</StylePBold16>
                            <StyleChangeLocationPay href=''>Phương thức giao hàng khác</StyleChangeLocationPay>
                        </StyleBoxSpaceBetween>
                        <StylePRegular16>Belarus, Minsk, st. Brilevskaya, 2, thích hợp. 15</StylePRegular16>
                        <StyleChangeLocationPay href=''>Thay đổi địa chỉ</StyleChangeLocationPay>
                    </StyleBoxPay>

                    <StyleBoxPay>
                        <StylePBold16>Phương thức thanh toán</StylePBold16>
                        <StyleBoxChosse>
                            <StyleTrueChosseTransport>
                                <StylePRegular16>Thanh toán trực tuyến</StylePRegular16>
                            </StyleTrueChosseTransport>
                            <StyleChosseTransport>
                                <StylePRegular16>Khi nhận được</StylePRegular16>
                            </StyleChosseTransport>
                        </StyleBoxChosse>
                    </StyleBoxPay>

                </Grid>
                <StyleGridPrice item xs={3.5}>
                    <StyleBoxBottomPrice>
                        <StylePTitlePrice>Giá đặt hàng</StylePTitlePrice>
                        <StyleContactPrice>
                            <StyleBoxSpaceBetween>
                                <StyleTextPrice>Giá trị hàng hóa</StyleTextPrice>
                                <StyleTextBoldPrice> VNĐ</StyleTextBoldPrice>
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
                            <StyleTextBoldPrice> VNĐ</StyleTextBoldPrice>
                        </StyleBoxSpaceBetween>
                        <StyleButtonPrice>Đi đến thanh toán</StyleButtonPrice>
                    </StyleBoxBottomPrice>
                </StyleGridPrice>
            </Grid>
        </Box>
    );
}

export default function CheckOut() {
    return (
        <Box className="card">
            <Header />
            <StyleCard>
                <Order />
            </StyleCard>

            <Footer />
        </Box>
    );
}
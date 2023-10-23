import { Box } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import { StylePBold16, StylePRegular16 } from '../cart/style-mui';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: 'flex'
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}));

export const StyleBoxPay = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '15px',
    paddingBottom: '30px'
}));

export const StyleChangeLocationPay = muiStyled('a')(({ theme }) => ({
    color: '#999999',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '0em',
    textDecoration: 'none'
}));

export const StyleBoxForm = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '15px'
}));
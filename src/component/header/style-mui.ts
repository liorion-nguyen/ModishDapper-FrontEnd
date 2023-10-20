import { Box } from '@mui/material';
import { styled as muiStyled } from '@mui/system';

export const StyleHeader = muiStyled('header')(({ theme }) => ({
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '-webkit-fill-available',
    padding: '20px 120px',
    background: '#ffffff',
    zIndex: '1000'
}));

export const StyleText = muiStyled('a')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '34px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#212429',
    textDecoration: 'none'
}));

export const StyleListText = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    width: '50%'
}));

export const StyleListIcon = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
}));

export const StyleCart = muiStyled('button')(({ theme }) => ({
    border: 'none',
    background: 'transparent',
    '::before': {
        content: 'attr(data-count)',
        position: 'absolute',
        top: '-0.75em',
        right: '-0.75em',
        width: '16px',
        height: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F6B750',
        color: '#000000',
        borderRadius: '50%'
    }
}));

export const StyleImgLogo = muiStyled('img')(({ theme }) => ({
    width: '100%',
    height: '100%'
}));

export const StyleBoxLogo = muiStyled(Box)(({ theme }) => ({
    width: '100px',
}));




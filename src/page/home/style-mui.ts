import { Box } from '@mui/material';
import { styled as muiStyled } from '@mui/system';


export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: 'flex'
}));

export const StyleImgInBox = muiStyled('img')(({ theme }) => ({
    width: '100%',
    height: '100%'
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}));

export const StyleImgNav = muiStyled('img')(({ theme }) => ({
    width: '550px',
    height: '750px',
    borderRadius: '0px 294.5px 0px 0px',
}));

export const StyleMain = muiStyled('main')(({ theme }) => ({
    marginTop: '80px',
    padding: '40px 120px',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px'
}));

export const StyleNavLeft = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px'
}));

export const StyleNavBar = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const StylePNav = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '36px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#212429'
}));

export const StyleANav = muiStyled('a')(({ theme }) => ({
    width: '176px',
    height: '53px',
    borderRadius: '20px',
    color: '#212429',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
}));

export const StyleANavFirst = muiStyled(StyleANav)(({ theme }) => ({
    background: '#F6B750'
}));

export const StyleANavLast = muiStyled(StyleANav)(({ theme }) => ({
    border: '1px solid #212429'
}));

export const StyleRefNav = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '50px'
}));

export const StyleTitle = muiStyled('h3')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    textAlign: 'left',  
    color: '#212429'
}));

export const StyleBoxDeal = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '30px'
}));

export const StylePDeal = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',  
    color: '#212429'
}));

export const StyleADeal = muiStyled('a')(({ theme }) => ({
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'flex'
}));

export const StyleImgDeal = muiStyled(StyleImgInBox)(({ theme }) => ({
    borderRadius: '50%'
}));

export const StyleItemDeal = muiStyled(StyleBoxColumn)(({ theme }) => ({
    alignItems: 'center',
    gap: '20px'
}));

export const StyleContentDeal = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between'
}));


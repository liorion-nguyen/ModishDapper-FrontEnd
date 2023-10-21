import { Box, Grid } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import Next from '@mui/icons-material/NavigateNext';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: 'flex'
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}));

export const StyleCard = muiStyled(StyleBoxColumn)(({ theme }) => ({
    marginTop: '80px',
    padding: '40px 120px',
    gap: '70px'
}));

export const StyleHr = muiStyled('hr')(({ theme }) => ({
    height: '1px',
    background: '#DBE5F1',
    border: 'none'
}));

export const StyleTitle = muiStyled('h3')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0em',
    color: '#212429',
    marginBottom: '30px'
}));

export const StylePRegular16 = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '0em',
    color: '#00000',
}));

export const StylePBold16 = muiStyled(StylePRegular16)(({ theme }) => ({
    fontWeight: '700',
}));

export const StyleItemProduct = muiStyled(Grid)(({ theme }) => ({
    width: '100%',
    height: '230px',
}));

export const StyleImgProduct = muiStyled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: '12px'
}));

export const StyleAddMinuProduct = muiStyled(Box)(({ theme }) => ({
    width: 'fit-content',
    padding: '0 30px',
    height: '48px',
    borderRadius: '48px',
    border: '1px solid #212429',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '30px'
}));

export const StylePriceProduct = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0em',
    color: '#212429',
}));

export const StyleSettingProduct = muiStyled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const StyleBoxParaProduct = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px'
}));

export const StyleParaProduct = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}));

export const StyleTextParaProduct = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19.6px',
    letterSpacing: '0em',
    color: '#212429',
}));

export const StyleContebtParaProduct = muiStyled(StyleTextParaProduct)(({ theme }) => ({
    fontWeight: '400',
}));


export const StyleNameProduct = muiStyled('h3')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '19.6px',
    letterSpacing: '0em',
    color: '#212429',
}));

export const StyleBoxContentProduct = muiStyled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '50px'
}));

export const StyleGridPrice = muiStyled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}));

export const StyleBoxPrice = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '20px',
    background: '#F8F8F8',
    padding: '20px',
}));

export const StyleBoxTopPrice = muiStyled(StyleBoxPrice)(({ theme }) => ({
    borderRadius: '12px 12px 0 0'
}));

export const StyleBoxBottomPrice = muiStyled(StyleBoxPrice)(({ theme }) => ({
    borderRadius: '0 0 12px 12px'
}));

export const StylePTitlePrice = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '24px',
    letterSpacing: '0em',
    color: '#212429',
    textTransform: 'uppercase'
}));

export const StyleFormCodePrice = muiStyled('form')(({ theme }) => ({
    width: '100%',
    border: '1px solid #DBE5F1',
    background: '#FFFFFF',
    borderRadius: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px'
}));

export const StyleInputCodePrice = muiStyled('input')(({ theme }) => ({
    width: '80%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    fontWeight: 'regular',
    lineHeight: '16px',
    letterSpacing: '0em',
    color: '#212429',
}));

export const StyleIconNextPrice = muiStyled(Next)(({ theme }) => ({
    width: '33px',
    height: '33px',
    background: '#000000',
    borderRadius: '50%',
    color: '#ffffff',
    fontSize: '14px'
}));

export const StyleButtonPrice = muiStyled('button')(({ theme }) => ({
    width: '100%',
    height: '48px',
    background: '#212429',
    color: '#ffffff',
    borderRadius: '48px',
    fontSize: '16px',
    fontWeight: 'regular',
    lineHeight: '16px',
    letterSpacing: '0em',
    textTransform: 'uppercase',
    border: 'none'
}));

export const StyleHrPrice = muiStyled(StyleHr)(({ theme }) => ({
    background: '#212429'
}));

export const StyleBoxSpaceBetween = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between'
}));

export const StyleTextBoldPrice = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    color: '#212429',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '24px',
    letterSpacing: '0em',
    textTransform: 'uppercase'
}));

export const StyleTextPrice = muiStyled(StyleTextBoldPrice)(({ theme }) => ({
    fontWeight: '400',
}));

export const StyleContactPrice = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '10px'
}));

export const StyleBoxChosse = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '30px',
}));

export const StyleChosseTransport = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '10px',
    border: '1px solid #DBE5F1',
    background: '#F8F8F8',
    borderRadius: '48px',
    width: 'fit-content',
    height: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px'
}));

export const StyleTrueChosseTransport = muiStyled(StyleChosseTransport)(({ theme }) => ({
    border: '1px solid #212429',
}));

export const StyleBoxInpTransport = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '15px',
    width: '600px'
}));

export const StyleInputTransport = muiStyled('input')(({ theme }) => ({
    padding: '10px',
    border: '1px solid #DBE5F1',
    outlineColor: '#131313',
    color: '#131313',
    width: '100%',
    borderRadius: '48px',
    fontSize: '16px',
    fontWeight: '400'
}));

export const StyleInpHalfTransport = muiStyled(StyleInputTransport)(({ theme }) => ({
    width: '47%',
}));

export const StyleBoxLocation = muiStyled(StyleBoxRow)(({ theme }) => ({
    alignItems: 'center',
    gap: '5px'
}));

export const StylePLocation = muiStyled('a')(({ theme }) => ({
    fontFamily: 'Montserrat',
    color: '#212429',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '0em',
    textDecoration: 'none',
    ':hover': {
    textDecoration: 'revert',
    }
}));

export const StyleFormTransport = muiStyled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
}));
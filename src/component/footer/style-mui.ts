import { Box } from '@mui/material';
import { styled as muiStyled } from '@mui/system';

export const StyleFooter = muiStyled('footer')(({ theme }) => ({
    background: '#212429',
    width: '100vw',
    padding: '60px 120px',
    gap: '40px',
    display: 'flex',
    flexDirection: 'column'
}));

export const StyleContact = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export const StyleIconContact1 = muiStyled(Box)(({ theme }) => ({
    background: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px'

}));

export const StyleText = muiStyled('p')(({ theme }) => ({
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
}));

export const StyleHref = muiStyled('a')(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    width: '25%'
}));

export const StyleHref2 = muiStyled('a')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0',
    textAlign: 'left',
    textDecoration: 'none',
    color: '#FFFFFFA3',
}));

export const StyleTitle = muiStyled('h3')(({ theme }) => ({
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '0',
    textAlign: 'left',
    marginBottom: '20px'
}));

export const StyleExplain = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#737373',
    maxWidth: '70%'
}));

export const StyleBox25 = muiStyled(Box)(({ theme }) => ({
    width: '25%'
}));

export const StyleForm = muiStyled('form')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    padding: '50px 120px',
    justifyContent: 'space-between',
    borderTop: '1px solid #B6B6B6'
}));


export const StyleH3Form = muiStyled('h3')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#212429',
}));

export const StyleBoxTextForm = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}));

export const StylePForm = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    color: '#212429',
}));

export const StyleBoxForm = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px'
}));

export const StyleInputForm = muiStyled('input')(({ theme }) => ({
    width: '384px',
    height: '48px',
    borderRadius: '48px',
    border: '1px solid #B6B6B6',
    padding: '0 15px'
}));

export const StyleButtonForm = muiStyled('button')(({ theme }) => ({
    width: '178px',
    height: '48px',
    borderRadius: '48px',
    background: '#212429',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '500',
    color: '#FFFFFF',
    border: 'none'
}));






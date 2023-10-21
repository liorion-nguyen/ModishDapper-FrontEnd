import { Box } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import { StylePBold16, StylePRegular16 } from '../cart/style-mui';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: 'flex'
}));
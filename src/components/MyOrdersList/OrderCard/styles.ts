import {Theme} from '@emotion/react';
import {SxProps} from '@mui/material';

export const baseButtonSx: SxProps<Theme> = {
    borderRadius: '10px',
    minWidth: '80px',
    fontSize: '13px',
    px: 1,
    py: 0.5,
    height: '44px',
    textTransform: "none"
};

export const statusButtonSx: SxProps<Theme> = {
    ...baseButtonSx,
    '&.Mui-disabled': {
        backgroundColor: 'white',
        color: '#000',
    },
};

export const actionButtonSx: SxProps<Theme> = {
    ...baseButtonSx,
    backgroundColor: 'secondary.main',
    color: 'white',
    px: 3,
};

export const OrderCardSx: SxProps<Theme> = {
    px: '20px',
    py: '28px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    backgroundColor: '#F6F6F6',
};

import {SxProps, Theme} from '@mui/material';

export const containerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100dvh',
    px: '30px',
};

export const titleStyle: SxProps<Theme> = {
    textAlign: 'center',
};

export const textStyle: SxProps<Theme> = {
    textAlign: 'center',
    mt: '30px',
};

export const buttonStackStyle: SxProps<Theme> = {
    gap: '20px',
    mt: '78px',
};

export const buttonStyle: SxProps<Theme> = {
    py: '17px',
};

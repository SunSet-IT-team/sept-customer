import {SxProps, Theme} from '@mui/material';

export const otpInputStyles: SxProps<Theme> = {
    gap: 1,
    '& .MuiInputBase-root': {
        width: '15vw',
        height: '15vw',
    },
    '& .MuiInputBase-input': {
        fontSize: '32px',
    },
};

export const helperTextStyles: SxProps<Theme> = {
    textAlign: 'center',
    fontSize: '14px',
};

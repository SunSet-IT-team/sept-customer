import {SxProps, Theme} from '@mui/material';

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};

export const textFieldStyles: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px',
    },
};

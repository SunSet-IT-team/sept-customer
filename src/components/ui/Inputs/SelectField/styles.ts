import {SxProps, Theme} from '@mui/material';

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
};

export const asteriskStyles = {
    color: 'red',
    marginLeft: '2px',
};

export const selectFieldStyles: SxProps<Theme> = {
    '& .MuiInputBase-root': {
        padding: '0px',
    },
};

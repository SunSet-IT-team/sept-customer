import {Theme} from '@emotion/react';
import {SxProps} from '@mui/material';

export const textFieldSx: SxProps<Theme> = {
    '& .MuiInputBase-inputMultiline': {
        color: 'text.secondary',
    },
};

export const submitButtonSx: SxProps<Theme> = {
    mt: '25px',
    borderRadius: '12px',
    height: 50,
    fontSize: '16px',
    backgroundColor: 'secondary.main',
    color: 'white',
};

export const orderTitleSx: SxProps<Theme> = {
    fontWeight: '600',
    my: '35px',
    fontSize: '20px',
};

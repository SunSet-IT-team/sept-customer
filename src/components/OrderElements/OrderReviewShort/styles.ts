import {Theme} from '@emotion/react';
import {SxProps} from '@mui/material';

export const textFieldSx: SxProps<Theme> = {
    '& .MuiInputBase-inputMultiline': {
        color: 'text.secondary',
    },
};

export const buttonSx: SxProps<Theme> = {
    borderRadius: '5px',
    height: 50,
    fontSize: '16px',
    backgroundColor: 'primary.main',
    color: 'white',
    flex: '0 1 50%',
};

export const editButtonSx: SxProps<Theme> = {
    ...buttonSx,
};

export const deleteButtonSx: SxProps<Theme> = {
    ...buttonSx,
};

export const orderTitleSx: SxProps<Theme> = {
    fontWeight: '600',
    my: '35px',
    fontSize: '20px',
};

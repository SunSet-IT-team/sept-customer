import {Theme} from '@emotion/react';
import {SxProps} from '@mui/material';

export const textFieldSx: SxProps<Theme> = {
    fonsize: '14px',
    lineHeight: '21px',
    color: '#7E7E7E',
    letterSpacing: '-0.05em',
    '& .MuiInputBase-inputMultiline': {
        color: '#7E7E7E',
    },
};

export const buttonSx: SxProps<Theme> = {
    borderRadius: '5px',
    fontSize: '14px',
    textTransform: 'none',
    lineHeight: '21px',
    letterSpacing: '-0.05em',
    backgroundColor: 'primary.main',
    color: 'white',
    flex: '0 1 50%',
    fontWeight: 500,
};

export const editButtonSx: SxProps<Theme> = {
    ...buttonSx,
};

export const deleteButtonSx: SxProps<Theme> = {
    ...buttonSx,
    backgroundColor: 'secondary.main',
};

export const orderTitleSx: SxProps<Theme> = {
    fontWeight: '600',
    my: '35px',
    fontSize: '20px',
};

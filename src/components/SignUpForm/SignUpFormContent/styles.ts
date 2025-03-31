import {SxProps, Theme} from '@mui/material';

export const formContainerStyles: SxProps<Theme> = {
    alignItems: 'center',
    mt: 3,
    width: '100%',
};

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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

export const checkboxStyles: SxProps<Theme> = {
    '& .MuiSvgIcon-root': {
        color: 'red',
    },
};

export const formControlLabelStyles: SxProps<Theme> = {
    '& .MuiFormControlLabel-label': {
        fontSize: '14px',
    },
    '& .MuiFormHelperText-root': {
        borderColor: 'red',
        position: 'absolute',
        width: 'max-content',
        top: '50px',
        left: 0,
        right: 0,
        display: 'block',
    },
};

import {SxProps, Theme} from '@mui/material';

export const chatHeaderStyle: SxProps<Theme> = {
    backgroundColor: 'primary.main',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
};

export const chatHeaderContentStyle: SxProps<Theme> = {
    justifyContent: 'center',
    alignItems: 'center',
    py: '15px',
};

export const chatImageStyle: SxProps<Theme> = {
    borderRadius: '50%',
    width: 89,
    height: 89,
    backgroundColor: '#4D4D4D',
};

export const chatMessageInputStyle: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px',
        '::placeholder': {
            fontStyle: 'italic',
            textAlign: 'center',
            fontSize: '14px',
        },
    },
};

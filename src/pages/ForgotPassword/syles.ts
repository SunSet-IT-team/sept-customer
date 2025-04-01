import {SxProps, Theme} from '@mui/material';

export const forgotPasswordContainer: SxProps<Theme> = {
    position: 'relative',
    py: '26px',
    px: '33px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
};

export const headerStack: SxProps<Theme> = {
    direction: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
};

export const backButton: SxProps<Theme> = {
    position: 'absolute',
    left: '33px',
    cursor: 'pointer',
    padding: '2px',
};

export const descriptionText: SxProps<Theme> = {
    variant: 'body2',
    textAlign: 'center',
};

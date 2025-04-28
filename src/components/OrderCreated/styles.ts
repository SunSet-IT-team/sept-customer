import {SxProps, Theme, useTheme} from '@mui/material';
import {StylesDictionary} from '../../types/share';

export const containerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100dvh',
    px: '20px',
};

export const titleStyle: SxProps<Theme> = {
    textAlign: 'center',
};

export const textStyle: SxProps<Theme> = {
    textAlign: 'center',
    mt: '30px',
    fontSize: '20px',
    lineHeight: '21px',
    letterSpacing: '-0.05em',
    fontWeight: 500,
};

export const buttonStackStyle: SxProps<Theme> = {
    gap: '20px',
    mt: '78px',
};

export const buttonStyle: SxProps<Theme> = {
    py: '12px',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '-0.05em',
};

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        logoContainer: {
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 'auto',
            gap: 2,
        },
        logo: {
            aspectRatio: '5/6', // Замените на реальное соотношение вашего лого
            width: '100%',
            maxWidth: '150px',

            objectFit: 'contain',
        },
        logoText: {
            width: '100%',
            height: '100%',
            maxWidth: '300px',

            objectFit: 'contain',
        },
    };
};

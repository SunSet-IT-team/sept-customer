import {createTheme, ThemeOptions} from '@mui/material';

export const theme: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#D9D9D9',
        },
        secondary: {
            main: '#4D4D4D',
        },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: {
            fontSize: '48px',
        },
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true, //Отключаем тень
            },
        },
    },
});

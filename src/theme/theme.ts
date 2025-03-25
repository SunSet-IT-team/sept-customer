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
        background: {
            default: '#4D4D4D',
            paper: 'white',
        },
        text: {
            primary: 'white',
        },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: {
            fontSize: '48px',
        },
        body2: {
            fontSize: '13px',
        },
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#4D4D4D',
                    borderRadius: '40px',
                    minHeight: '71px',
                    position: 'relative',
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: 'white',
                    justifyContent: 'end',
                    paddingBottom: '10px',
                    borderRadius: '40px',
                    '& .MuiBottomNavigationAction-label': {
                        fontSize: '13px',
                    },
                    '&.Mui-selected .MuiBottomNavigationAction-label': {
                        fontSize: '13px',
                    },
                },
            },
        },
    },
});

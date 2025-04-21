import {SxProps, useTheme} from '@mui/material/styles';

export const useProfileStyles = () => {
    const theme = useTheme();

    const styles: Record<string, SxProps> = {
        root: {
            minHeight: '100dvh',
        },
        header: {
            width: '100%',
            background: theme.palette.background.gradient,
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        },
        avatar: {
            width: 100,
            height: 100,
            mb: 2,
            borderRadius: '10px',
            bgcolor: theme.palette.primary.main,
        },
        menuContainer: {
            py: 2,
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        menuButton: {
            py: '18px',
            justifyContent: 'center',
            color: '#000',
            textTransform: 'none',
            backgroundColor: theme.palette.background.blue,

            '& .MuiButton-startIcon>*:nth-of-type(1)': {
                fontSize: '24px',
                width: '28px',
                height: '28px',
            },
        },
        menuText: {
            width: '100px',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '21px',
            letterSpacing: '-0.05em',
        },
    };

    return styles;
};

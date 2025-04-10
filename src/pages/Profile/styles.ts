import {SxProps, useTheme} from '@mui/material/styles';

export const useProfileStyles = () => {
    const theme = useTheme();

    const styles: Record<string, SxProps> = {
        root: {
            minHeight: '80dvh',
        },
        header: {
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
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
            color: theme.palette.text.primary,
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,

            '& .MuiButton-startIcon>*:nth-of-type(1)': {
                fontSize: '24px',
                width: '28px',
            },
        },
        menuText: {
            width: '100px',
            fontSize: '14px',
            fontWeight: 600,
        },
    };

    return styles;
};

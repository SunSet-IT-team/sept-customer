import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        title: {
            mb: '20px',
            fontWeight: 500,
            fontSize: '21px',
            color: '#4D4D4D',
            lineHeight: '21px',
        },
        label: {
            fontSize: '14px',
        },
        buttons: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            textAlign: 'right',
            flex: '0 1 139px',
        },
        baseButtonSx: {
            borderRadius: '10px',
            minWidth: '80px',
            fontSize: '13px',
            px: 1,
            py: 0.5,
            height: '44px',
            textTransform: 'none',
        },
        text: {
            textDecoration: 'none',
            color: theme.palette.text.primary,
        },
        statusButtonSx: {
            borderRadius: '10px',
            minWidth: '80px',
            fontSize: '13px',
            px: 1,
            py: 0.5,
            height: '44px',
            textTransform: 'none',
            '&.Mui-disabled': {
                backgroundColor: 'white',
                opacity: 1,
                color: '#000',
            },
        },
        actionButtonSx: {
            borderRadius: '10px',
            minWidth: '80px',
            fontSize: '13px',
            px: 1,
            py: 0.5,
            height: '44px',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            textTransform: 'none',
            '&.Mui-disabled': {
                backgroundColor: 'white',
                color: '#000',
            },
        },
        OrderCardSx: {
            px: '20px',
            py: '28px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            backgroundColor: theme.palette.background.blue,
        },
    };
};

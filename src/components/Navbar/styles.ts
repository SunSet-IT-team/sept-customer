import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        wrapper: {
            display: 'inline',
            position: 'absolute',
            top: '-50%',
            background: '#FFFFFF',
            borderRadius: '50%',
            padding: '4px',
            width: '62px',
            height: '62px',
        },
        img: {
            width: 30,
            height: 30,
        },
        imgActive: {
            borderRadius: '50%',
            padding: '4px',
            background: theme.palette.background.gradient,
            width: 52,
            height: 52,
        },
        imgHome: {
            borderRadius: '50%',
            padding: '4px',
            border: '2px solid #3F3B3B',
            width: 52,
            height: 52,
        },
    };
};

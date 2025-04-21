import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        logoContainer: {
            width: '100%',
            aspectRatio: '3/1', // Замените на реальное соотношение вашего лого
            position: 'relative',
        },
        logo: {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        },
    };
};

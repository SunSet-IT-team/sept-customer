import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

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
            mb: 3,
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

import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            flexDirection: 'column',
        },
        firstBtn: {py: '17px', mt: '40px', mb: '20px'},
        secondBtn: {py: '17px'},
    };
};

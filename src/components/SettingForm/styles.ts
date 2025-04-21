import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        mainList: {
            mt: '30px',
            px: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        mainInfo: {
            textAlign: 'center',
            fontWeight: 500,
            fontSize: '20px',
            mb: '20px',
        },

        aboutCompany: {
            fontWeight: 500,
            my: '10px',
        },
    };
};

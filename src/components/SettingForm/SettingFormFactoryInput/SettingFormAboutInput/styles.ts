import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        txtField: {
            backgroundColor: 'primary.light',
            borderRadius: '10px',
            padding: '8px 12px',
        },
    };
};

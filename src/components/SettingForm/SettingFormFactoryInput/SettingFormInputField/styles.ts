import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        label: {
            fontWeight: 500,
        },

        input: {
            width: '100%',
        },

        labelStyles: {
            mb: 1,
            fontWeight: 500,
        },
    };
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};

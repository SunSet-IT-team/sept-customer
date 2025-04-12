import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        avatar: {
            width: 71,
            height: 71,
            bgcolor: 'grey.300',
            borderRadius: 2,
        },
        heartBtn: {
            position: 'absolute',
            top: -6,
            right: -6,
            bgcolor: 'white',
            border: '1px solid #ccc',
            p: '2px',
        },
    };
};

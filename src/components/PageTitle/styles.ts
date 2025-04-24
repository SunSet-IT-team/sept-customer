import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            position: 'sticky',
            left: 0,
            right: 0,
            top: 0,
            py: '40px',
            px: '12px',
            backgroundColor: 'white',
            zIndex: 100,
        },

        arrow: {
            position: 'absolute',
            left: '0',
            cursor: 'pointer',
            padding: '2px',
        },

        title: {fontWeight: 500},
    };
};

import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        pageContainer: {
            position: 'relative',
            py: '26px',
            mx: 'auto',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '620px',
            px: '20px',
        },
        title: {
            height: '1px',
        },
        content: {
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    };
};

import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        root: {},
        root_with_underline: {borderBottom: `2px solid #D9D9D9`},
        name: {
            fontSize: '20px',
            lineHeight: '21px',
            letterSpacing: '-0.05em',
        },
        value: {
            fontSize: '20px',
            lineHeight: '21px',
            letterSpacing: '-0.05em',
        },
    };
};

import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme()

    return {
        root: {},
        root_with_underline: {borderBottom: `2px solid ${theme.palette.primary.main}`},
    };
};

import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        pageTitle: {
            "& svg": {
              left: "16px"
            }
        },
    };
};

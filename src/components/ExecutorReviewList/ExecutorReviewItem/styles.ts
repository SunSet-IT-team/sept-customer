import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
        textFieldSx: {
            '& .MuiInputBase-inputMultiline': {
                color: 'text.secondary',
            },
        },
    };
};

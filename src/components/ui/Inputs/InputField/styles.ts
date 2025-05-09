import {SxProps} from '@mui/material';
import {StylesDictionary} from '../../../../types/share';
import {Theme} from '@emotion/react';

export const useStyles = (): StylesDictionary => {
    return {
        input: {
            width: '100%',
        },

        textFieldStyles: {
            '& .MuiInputBase-input': {
                padding: '10px',
            },
        },
    };
};

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};

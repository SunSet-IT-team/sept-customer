import {StylesDictionary} from '../../../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
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

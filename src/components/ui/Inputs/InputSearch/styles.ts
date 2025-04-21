import {StylesDictionary} from '../../../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
        input: {
            '& .MuiInputBase-root': {
                background: 'white',
            },
            '& .MuiInputBase-input': {
                padding: '10px',
                '::placeholder': {
                    color: 'black',
                    opacity: 1,
                    fontStyle: 'italic',
                    textAlign: 'center',
                },
            },
            '& .MuiInputAdornment-root': {
                height: '100%',
            },
        },
        iconWrapper: {
            height: '100%',
        },
        icon: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            padding: 1.1,
            marginRight: '-13px',
            borderRadius: '10px',
        },

        iconContent: {
            color: 'white',
        },
    };
};

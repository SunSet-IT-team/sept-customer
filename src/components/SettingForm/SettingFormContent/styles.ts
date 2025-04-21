import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        container: {
            alignItems: 'center',
            my: 3,
            gap: '16px',
            width: '100%',
        },
        input: {width: '100%'},
    };
};

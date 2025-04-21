import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
        box: {position: 'relative'},
        image: {
            backgroundColor: 'background.blue',
            borderRadius: '20px',
        },
        favouriteIconStyle: {
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };
};

import {StylesDictionary} from '../../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
        imageContainerStyle: {
            width: '90px',
            height: '90px',
            borderRadius: '20px',
            position: 'relative',
        },

        toggleFavouriteStyle: {
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            border: '1px solid black',
        },

        heartBtn: {
            position: 'absolute',
            top: -6,
            right: -6,
            bgcolor: 'white',
            border: '1px solid #ccc',
            p: '2px',
        },
    };
};

export const imageStyle = {
    borderRadius: '20px',
    width: '90px',
    height: '90px',
};
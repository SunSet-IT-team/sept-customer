import {StylesDictionary} from '../../types/share';

export const useStyles = (): StylesDictionary => {
    return {
        box: {
            flexGrow: 1,
        },
        ratingBoxStyle: {
            px: '4px',
            py: '8px',
            border: '1px solid black',
            borderRadius: '20px',
            mt: '-10px',
            backgroundColor: 'white',
            position: 'relative',
        },
        ratingStackStyle: {
            flexDirection: 'row',
            gap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        ratingTextStyle: {
            display: 'flex',
            gap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        companyNameStyle: {
            textAlign: 'center',
            fontSize: '21px',
            fontWeight: '500',
            py: '28px',
        },
        infoBoxStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            px: '16px',
            py: '8px',
            borderRadius: '20px',
            backgroundColor: 'background.blue',

            '& p': {
                fontSize: '14px',
                fontWeight: 500,
            },
        },
        infoBoxItemStyle: {
            width: '100%',
            textAlign: 'center',
        },
        descriptionBoxStyle: {
            mt: '37px',
            '& h5': {
                mb: 2,
                fontSize: '20px',
                fontWeight: 500,
            },
            '& p': {
                fontSize: '15px',
            },
        },
        reviewsBoxStyle: {
            mt: 4,
            '& h5': {
                mb: 2,
                fontSize: '20px',
                fontWeight: 500,
            },
            '& p': {
                fontSize: '15px',
            },
        },
    };
};

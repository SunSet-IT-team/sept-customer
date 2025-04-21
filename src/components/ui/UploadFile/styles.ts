import {SxProps, useTheme} from '@mui/material/styles';
import {Theme} from '@emotion/react';
import {StylesDictionary} from '../../../types/share';

export const useStyles = (sx: SxProps<Theme>): StylesDictionary => {
    const theme = useTheme();

    return {
        rootContainer: {display: 'flex', alignItems: 'center', mb: 2},
        container: {
            width: 108,
            minWidth: 108,
            height: 108,
            borderRadius: '10px',
            bgcolor: 'grey.300',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            cursor: 'pointer',
            '&:hover': {
                bgcolor: 'grey.400',
            },
            ...sx,
        },
        imgIcon: {fontSize: 40, color: 'grey.600'},
    };
};

export const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

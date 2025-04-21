import {SxProps, useTheme} from '@mui/material/styles';
import {Theme} from '@emotion/react';
import {StylesDictionary} from '../../../../types/share';

export const useStyles = (
    sx: SxProps<Theme>,
    uploadFileSx: SxProps<Theme>
): StylesDictionary => {
    const theme = useTheme();

    return {
        container: {
            alignItems: 'center',
            ...sx,
        },
        uploadFile: {
            height: 150,
            width: 150,
            ...uploadFileSx,
        },
        labelContainer: {
            textAlign: 'center',
            flex: '1 1 auto',
        },
    };
};

export const labelStyles: React.CSSProperties = {
    display: 'inline-block',
    maxWidth: '170px',
};

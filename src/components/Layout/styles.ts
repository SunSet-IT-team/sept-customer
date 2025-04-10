import {SxProps} from '@mui/material/styles';

export const useLayoutStyles = () => {
    const styles: Record<string, SxProps> = {
        layout: {
            position: 'relative',
            pb: '140px',
            px: '20px',
        },
        navigation: {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            background: 'none',
        },
    };

    return styles;
};

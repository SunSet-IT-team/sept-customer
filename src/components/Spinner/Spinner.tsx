import {Box, CircularProgress} from '@mui/material';
import {FC} from 'react';

export const Spinner: FC = () => {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mt={'50%'}
        >
            <CircularProgress />
        </Box>
    );
};

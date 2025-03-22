import {Box, Typography} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {useMediaQuery} from 'usehooks-ts';
export const Layout: FC<PropsWithChildren> = ({children}) => {
    const matches = useMediaQuery('(max-width: 430px)');
    return (
        <div>
            {matches ? (
                children
            ) : (
                <Box
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                    minHeight={'100vh'}
                >
                    <Typography variant="h4" textAlign={'center'}>
                        Пожалуйста, зайдите с мобильного устройства
                    </Typography>
                </Box>
            )}
        </div>
    );
};

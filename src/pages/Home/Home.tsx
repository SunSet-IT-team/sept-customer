import {Box, Button, Stack, Typography} from '@mui/material';
import {FC} from 'react';

export const Home: FC = () => {
    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                minHeight={'100vh'}
                px={'10px'}
            >
                <Stack gap={'20px'}>
                    <Typography variant="h3" textAlign={'center'}>
                        ЭКО Контроль
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{py: '17px', mt: '113px'}}
                        href="/sign-in"
                    >
                        Войти
                    </Button>
                    <Button
                        variant="contained"
                        sx={{py: '17px'}}
                        href="/sign-up"
                    >
                        Зарегистрироваться
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

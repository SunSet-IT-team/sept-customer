import {Box, Button, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Link} from 'react-router-dom';
export const Auth: FC = () => {
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
                    <Typography variant="h1" textAlign={'center'}>
                        ЭКО Контроль
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{py: '17px', mt: '113px'}}
                        component={Link}
                        to="/sign-in"
                    >
                        Войти
                    </Button>
                    <Button
                        variant="contained"
                        sx={{py: '17px'}}
                        component={Link}
                        to="/sign-up"
                    >
                        Зарегистрироваться
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

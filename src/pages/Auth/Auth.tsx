import {Box, Button, Stack} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useStyles} from './styles';
import {BackLayout} from '../layouts/BackLayout';
export const Auth: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <BackLayout>
                <Stack gap={'20px'} sx={styles.container}>
                    <Box sx={styles.logoContainer}>
                        <Box
                            component="img"
                            sx={styles.logo}
                            alt="ЭКОКОНТРОЛЬ logo"
                            src="/logo.png"
                        />
                        <Box
                            component="img"
                            sx={styles.logoText}
                            alt="ЭКОКОНТРОЛЬ"
                            src="/logo_text.png"
                        />
                    </Box>
                    <Button
                        variant="contained"
                        sx={{py: '17px', mt: '52px'}}
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
            </BackLayout>
        </>
    );
};

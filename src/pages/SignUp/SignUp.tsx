import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {SignUpForm} from '../../components/SignUpForm/SignUpForm';
import {BackLayout} from '../layouts/BackLayout';
import {useStyles} from './styles';

export const SignUp: FC = () => {
    const styles = useStyles();
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <BackLayout title="Регистрация">
                <Box sx={styles.container}>
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
                    <SignUpForm />
                </Box>
            </BackLayout>
        </>
    );
};

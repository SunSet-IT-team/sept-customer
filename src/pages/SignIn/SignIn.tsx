import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {SignInForm} from '../../components/SignInForm/SignInForm';
import {BackLayout} from '../layouts/BackLayout';
import {useStyles} from './styles';

export const SignIn: FC = () => {
    const styles = useStyles();
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <BackLayout title="Вход">
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
                    <SignInForm />
                </Box>
            </BackLayout>
        </>
    );
};

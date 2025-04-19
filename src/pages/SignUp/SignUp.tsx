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
                    <Box
                        component="img"
                        sx={styles.logo}
                        alt="Your logo"
                        src="/logo.png"
                    />
                    <SignUpForm />
                </Box>
            </BackLayout>
        </>
    );
};

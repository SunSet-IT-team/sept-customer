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
                    <Box
                        component="img"
                        sx={styles.logo}
                        alt="Your logo"
                        src="/logo.png"
                    />
                    <SignInForm />
                </Box>
            </BackLayout>
        </>
    );
};

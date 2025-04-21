import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useStyles} from './styles';
import {BackLayout} from '../layouts/BackLayout';
import {ResetForm} from '../../components/ResetForm';

/**
 * Страница сброса пароля
 */
export const ResetPage: FC = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Сброс пароля</title>
            </Helmet>
            <BackLayout title="Вход">
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={styles.logoContainer}>
                        <Box
                            component="img"
                            sx={styles.logo}
                            alt="Your logo"
                            src="/logo.png"
                        />
                    </Box>
                    <ResetForm />
                </Box>
            </BackLayout>
        </>
    );
};

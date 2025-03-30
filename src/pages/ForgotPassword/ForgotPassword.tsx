import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {ForgotPasswordForm} from '../../components/ForgotPassword/ForgotPasswordForm';
import {PageTitle} from '../../components/PageTitle/PageTitle';

export const ForgotPassword: FC = () => {
    return (
        <>
            <Helmet>
                <title>Сменить пароль</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100dvh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <PageTitle title="Сменить пароль" />
                <Box my={'auto'}>
                    <Typography variant="body2" textAlign={'center'}>
                        Укажите e-mail, указанный при регистрации, и новый
                        пароль. На почту придет код подтверждения.
                    </Typography>
                    <ForgotPasswordForm />
                </Box>
            </Box>
        </>
    );
};

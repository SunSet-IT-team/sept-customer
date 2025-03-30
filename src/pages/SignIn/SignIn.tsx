import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {SignInForm} from '../../components/SignInForm/SignInForm';

export const SignIn: FC = () => {
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100dvh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <PageTitle title="Войти" />
                <Box my={'auto'}>
                    <SignInForm />
                </Box>
            </Box>
        </>
    );
};

import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {SignUpForm} from '../../components/SignUpForm/SignUpForm';

export const SignUp: FC = () => {
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100dvh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <PageTitle title="Регистрация" />
                <Box my={'auto'}>
                    <SignUpForm />
                </Box>
            </Box>
        </>
    );
};

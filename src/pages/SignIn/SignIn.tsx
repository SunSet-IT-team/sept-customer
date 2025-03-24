import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {SignInForm} from '../../components/SignInForm/SignInForm';

export const SignIn: FC = () => {
    const navigate = useNavigate();
    const toBack = () => {
        navigate(-1);
    };
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100vh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                    width={'100%'}
                    alignItems={'center'}
                >
                    <ArrowBackIosNewRoundedIcon
                        sx={{
                            position: 'absolute',
                            left: '33px',
                            cursor: 'pointer',
                            padding: '2px',
                        }}
                        onClick={toBack}
                    />
                    <Typography variant="h6" sx={{fontWeight: 500}}>
                        Войти
                    </Typography>
                </Stack>
                <Box my={'auto'}>
                    <SignInForm />
                </Box>
            </Box>
        </>
    );
};

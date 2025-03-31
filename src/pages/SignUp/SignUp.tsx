import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {SignUpForm} from '../../components/SignUpForm/SignUpForm';

export const SignUp: FC = () => {
    const navigate = useNavigate();
    const toBack = () => {
        navigate(-1);
    };
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                display={'flex'}
                flexDirection={'column'}
                minHeight={'100vh'}
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
                    <Typography
                        variant="h6"
                        sx={{fontWeight: 500}}
                        component={'h1'}
                    >
                        Регистрация
                    </Typography>
                </Stack>
                <Box my={'auto'}>
                    <SignUpForm />
                </Box>
            </Box>
        </>
    );
};

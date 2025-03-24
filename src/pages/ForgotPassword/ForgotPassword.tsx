import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {ForgotPasswordForm} from '../../components/ForgotPassword/ForgotPasswordForm';

export const ForgotPassword: FC = () => {
    const navigate = useNavigate();
    const toBack = () => {
        navigate(-1);
    };
    return (
        <>
            <Helmet>
                <title>Сменить пароль</title>
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
                        Сменить пароль
                    </Typography>
                </Stack>
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

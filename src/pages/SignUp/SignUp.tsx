import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {SignUpForm} from '../../components/SignUpForm/SignUpForm';

export const SignUp: FC = () => {
    const navigate = useNavigate();
    const toBack = () => {
        navigate(-1);
    };
    return (
        <Box position={'relative'} py={'26px'} px={'33px'}>
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
                    Регистрация
                </Typography>
            </Stack>
            <SignUpForm />
        </Box>
    );
};
